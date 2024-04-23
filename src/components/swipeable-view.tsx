import { Box } from '@/atoms'
import AnimatedBox, { AnimatedBoxProps } from '@/components/animated-box'
import { forwardRef, useCallback, useImperativeHandle } from 'react'
import { Dimensions } from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandlerProps
} from 'react-native-gesture-handler'
import {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

type SwipeLeftCallback = () => any

export interface BackViewProps {
  progress: Readonly<SharedValue<number>>
}

interface Props
 extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'>,
  AnimatedBoxProps {
  children: React.ReactNode
  backView?: React.ReactNode | React.FC<BackViewProps>
  onSwipeLeft?: (conceal: SwipeLeftCallback) => any
  revealed?: boolean
}

interface SwipeableViewHandle {
  conceal: () => void
}

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const SWIPE_THRESHOLD = -0.2

const SwipeableView = forwardRef<SwipeableViewHandle, Props>((props, ref) => {
  const { children, backView, onSwipeLeft, simultaneousHandlers, ...boxProps } =
   props
  const translateX = useSharedValue(0)

  const invokeSwipeLeft = useCallback(() => {
    if (onSwipeLeft) {
      onSwipeLeft(() => {
        translateX.value = withTiming(0)
      })
    }
  }, [onSwipeLeft])

  const panGesture = Gesture.Pan().activeOffsetX([-5, 1000]).onChange(event => {
    const x = interpolate(event.translationX, [-SCREEN_WIDTH, 0], [-1, 0])
    translateX.value = Math.max(-1, Math.min(0, x))
  }).onEnd(() => {
    const shouldBeDismissed = translateX.value < SWIPE_THRESHOLD
    if (shouldBeDismissed) {
      translateX.value = withTiming(-1)
      runOnJS(invokeSwipeLeft)()
    } else {
      translateX.value = withTiming(0)
    }
  })

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(translateX.value, [-1, 0], [-SCREEN_WIDTH, 0])
      }
    ]
  }))

  const progress = useDerivedValue(() => {
    return interpolate(
     Math.max(translateX.value, SWIPE_THRESHOLD),
     [-0.2, 0],
     [1, 0]
    )
  })

  useImperativeHandle(ref, () => ({
    conceal: () => {
      translateX.value = withTiming(0)
    }
  }))

  return (
   <GestureHandlerRootView>
     <AnimatedBox {...boxProps}>
       {backView && (
        <Box position="absolute" left={0} right={0} top={0} bottom={0}>
          {typeof backView === 'function' ? backView({ progress }) : backView}
        </Box>
       )}
       <GestureDetector gesture={panGesture}>
         <AnimatedBox style={facadeStyle}>{children}</AnimatedBox>
       </GestureDetector>
     </AnimatedBox>
   </GestureHandlerRootView>
  )
})

export default SwipeableView
