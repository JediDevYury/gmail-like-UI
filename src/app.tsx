import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigations from "@/navs.tsx";
import {ThemeProvider} from "@shopify/restyle";
import light from "@/themes/light.ts";
import StatusBar from "@/components/status-bar.tsx";

const App = () => {
  return (
   <NavigationContainer>
    <ThemeProvider theme={light}>
      <StatusBar/>
      <Navigations/>
    </ThemeProvider>
  </NavigationContainer>
  );
}

export default App;
