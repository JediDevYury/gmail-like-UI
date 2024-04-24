import React, {forwardRef, useCallback, useImperativeHandle, useMemo, useRef} from "react";
import {BottomSheet, Box, Text} from "@/atoms";
import {useAtom} from "jotai";
import actionThemeId from "@/states/theme.ts";
import RNBottomSheet, {BottomSheetBackdrop, BottomSheetFlatList} from "@gorhom/bottom-sheet";
import ThemeListItem from "@/components/theme-list-item.tsx";
import {ThemeMeta, themes} from "@/themes";

interface Props {

}

interface ThemePickerHandle {
  show: () => void
}

const ThemePicker = forwardRef<ThemePickerHandle, Props>((props, ref) => {
  const [, setActiveTheme] = useAtom(actionThemeId)
  const refBottomSheet = useRef<RNBottomSheet>(null)
  const snapPoints = useMemo(() => ["40%", "90%"], [])

  useImperativeHandle(ref, () => {
    return {
      show: () => {
        const {current: bottomSheet} = refBottomSheet

        if(bottomSheet) {
          bottomSheet.snapToIndex(0)
        }
      }
    }
  }, [])

  const renderThemeItem = useCallback(({item}: {item: ThemeMeta}) => {
    return <ThemeListItem theme={item} onPress={setActiveTheme}/>
  }, [])

  return (
   <BottomSheet
    ref={refBottomSheet}
    index={-1}
    snapPoints={snapPoints}
    backdropComponent={(props) =>
     <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
     />
    }
    detached
    bottomInset={46}
    enablePanDownToClose
    style={{marginHorizontal: 12}}
   >
      <BottomSheetFlatList
        data={themes}
        ListHeaderComponent={
          <Box
           p="lg"
           alignItems="center"
          >
            <Text fontWeight={"bold"}>Change Themes</Text>
          </Box>
        }
        keyExtractor={(item) => item.id}
        renderItem={renderThemeItem}
      />
   </BottomSheet>
  )
})

type ThemePicker = ThemePickerHandle;
export default ThemePicker;
