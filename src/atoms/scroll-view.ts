import { Theme } from '@/themes'
import {
  ScrollView as NativeScrollView,
  ScrollViewProps as NativeScrollViewProps
} from 'react-native'
import { createBox } from '@shopify/restyle'
import {ComponentProps} from "react";

const ScrollView = createBox<Theme, NativeScrollViewProps>(NativeScrollView)
export type ScrollViewProps = ComponentProps<typeof ScrollView>

export default ScrollView
