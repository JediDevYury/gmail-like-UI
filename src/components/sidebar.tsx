import React from "react";

import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {SafeAreaView} from "react-native-safe-area-context";
import {Box, Text} from "@/atoms";

const Sidebar = ({}: DrawerContentComponentProps) => {
  return (
   <Box flex={1} bg="$sidebarBackground">
     <SafeAreaView>
       <Text variant="sidebar" m="lg">GmailLikeUI</Text>
     </SafeAreaView>
   </Box>
  );
};

export default Sidebar;
