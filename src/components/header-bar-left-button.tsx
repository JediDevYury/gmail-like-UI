import AnimatedBox, {AnimatedBoxProps} from "@/components/animated-box.tsx";
import {Box, TouchableOpacity} from "@/atoms";
import FeatherIcon from "@/components/icon.tsx";
import {Easing, useAnimatedStyle, withTiming} from "react-native-reanimated";

type Props = AnimatedBoxProps & {
  onPress: () => void;
  backButtonVisible: boolean;
}

const HeaderBarLeftButton = (props: Props) => {
  const {onPress, backButtonVisible} = props;

  const menuButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(backButtonVisible ? 0 : 1, {
        easing: Easing.out(Easing.quad)
      }),
      transform: [
        {rotateZ: withTiming(backButtonVisible ? '0deg' : '180deg')}
      ]
    }
  }, [backButtonVisible])

  const backButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(backButtonVisible ? 1 : 0, {
        easing: Easing.in(Easing.quad)
      }),
      transform: [
        {rotateZ: withTiming(backButtonVisible ? '0deg' : '180deg')}
      ]
    }
  }, [backButtonVisible])

  return (
    <TouchableOpacity
     m="xs"
     p="xs"
     onPress={onPress}
     rippleBorderless
    >
      <AnimatedBox
        position="absolute"
        width={30}
        height={30}
        justifyContent="center"
        alignItems="center"
        style={menuButtonStyle}
      >
        <FeatherIcon name="menu" size={22}/>
      </AnimatedBox>
      <AnimatedBox
        position="absolute"
        width={30}
        height={30}
        justifyContent="center"
        alignItems="center"
        style={backButtonStyle}
      >
        <FeatherIcon name="arrow-left" size={26}/>
      </AnimatedBox>
      <Box width={22} height={22} />
    </TouchableOpacity>
  );
};

export default HeaderBarLeftButton;
