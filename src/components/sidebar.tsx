import React, {useCallback} from "react";

import {DrawerContentComponentProps} from "@react-navigation/drawer";
import {Box, Text} from "@/atoms";
import Feather from 'react-native-vector-icons/Feather';
import theme from "@/themes/light.ts";
import {useAtom} from "jotai";
import actionThemeId from "@/states/theme.ts";
import {ThemeMeta, ThemeNames, themes} from "@/themes";
import ThemeListItem from "@/components/theme-list-item.tsx";
import {createBox} from "@shopify/restyle";
import {type Theme} from "@/themes";
import {FlatList, FlatListProps} from "react-native";

const StyledFlatList = createBox<Theme, FlatListProps<ThemeMeta>>(FlatList);

const Sidebar = ({  }: DrawerContentComponentProps) => {
  const [_, setActiveTheme] = useAtom(actionThemeId);

  const handleThemeItemPress = useCallback((selectedThemeId: ThemeNames) => {
    setActiveTheme(selectedThemeId);
  }, [setActiveTheme]);

  const renderThemeItem = useCallback(({item}: {item: ThemeMeta}) => {
    return (
      <ThemeListItem
       theme={item}
       onPress={handleThemeItemPress}
      />
    );
  }, [handleThemeItemPress]);

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
     <StyledFlatList
      data={themes}
      ListHeaderComponent={() => (
       <Box
        p="lg"
        alignItems="flex-start"
       >
         <Text color="$sidebarForeground" fontWeight="bold">
           UI Themes
         </Text>
       </Box>
      )}
      keyExtractor={(theme) => theme.id}
      renderItem={renderThemeItem}
     />
   </Box>
  );
};

export default Sidebar;
