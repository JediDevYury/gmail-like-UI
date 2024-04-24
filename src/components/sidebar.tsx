import React, {useCallback} from "react";

import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Box, Text} from "@/atoms";
import BookList from "@/components/book-list.tsx";
import Feather from 'react-native-vector-icons/Feather';
import theme from "@/themes/light.ts";

const Sidebar = ({ navigation }: DrawerContentComponentProps) => {
  const handleBookListItemsPress = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);

  return (
   <Box
    flex={1}
    bg="$sidebarBackground"
    style={{
      margin: 0,
      padding: 0,
    }}
   >
     <Box pt="xxl">
       <Box
        flexDirection="row"
        alignItems="center"
        pl="lg"
        pb="sm"
        borderBottomColor="$sidebarSeparator"
        borderBottomWidth={1}
       >
         <Feather name="mail" size={24} color={theme.colors.$sidebarForeground}/>
         <Text variant="sidebar" m="lg" color="$sidebarForeground">
           Gmail
         </Text>
       </Box>
     </Box>
     <BookList
      onPressItem={handleBookListItemsPress}
      inBottomSheet={false}
     />
   </Box>
  );
};

export default Sidebar;
