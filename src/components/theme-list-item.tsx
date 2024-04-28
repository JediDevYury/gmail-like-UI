import {ThemeMeta, ThemeNames} from "@/themes";

import React, {useCallback, useMemo} from 'react';
import {useAtom} from "jotai";
import {selectAtom} from "jotai/utils";
import actionThemeId from "@/states/theme.ts";
import {Box, Text, TouchableOpacity} from "@/atoms";
import FeatherIcon from "@/components/icon.tsx";

interface Props {
  theme: ThemeMeta
  onPress: (themeId: ThemeNames) => void
}

const ThemeListItem = ({theme, onPress}: Props) => {
  const [isActiveTheme] = useAtom(
   useMemo(() =>
    selectAtom(actionThemeId, (id) => id === theme.id),
    [theme]
   ));

  const handlePress =
   useCallback(() => onPress(theme.id),
   [onPress, theme]);

  return (
    <TouchableOpacity
     minHeight={44}
     flexDirection={"row"}
     alignItems={"center"}
     px={"lg"}
     onPress={handlePress}
    >
      <Box
       alignItems="center"
       justifyContent="center"
       width={32}
      >
        {isActiveTheme ? (<FeatherIcon name={"check"} size={20} color="$primary"/>) : null}
      </Box>
      <Text color="$sidebarForeground">
        {theme.name}
      </Text>
    </TouchableOpacity>
  )
}

export default ThemeListItem;
