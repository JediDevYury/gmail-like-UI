import {createBox} from "@shopify/restyle";
import {Theme} from "@/themes";
import {Pressable as NativePressable, PressableProps as NativePressableProps} from "react-native";
import {ComponentProps} from "react";

const Pressable = createBox<Theme, NativePressableProps>(NativePressable)

export type PressableProps = ComponentProps<typeof Pressable>
export default Pressable;
