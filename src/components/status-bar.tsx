import React from "react";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/themes";
import {StatusBar as NativeStatusBar} from "react-native";

export default function StatusBar() {
  const theme = useTheme<Theme>();
  return (
    <NativeStatusBar
      animated={true}
      barStyle={theme.statusBar.barStyle}
      backgroundColor={theme.colors.$windowBackground || "white"}
    />
  );
}
