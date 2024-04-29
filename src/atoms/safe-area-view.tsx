import {SafeAreaView as NativeSafeAreaView, ViewProps} from 'react-native';
import {createBox} from "@shopify/restyle";
import {Theme} from "@/themes";
import {ComponentProps} from "react";

const SafeAreaView = createBox<Theme, ViewProps>(NativeSafeAreaView);

export type SafeAreaViewProps = ComponentProps<typeof SafeAreaView>;
export default SafeAreaView;
