import {useCallback, useRef, useState} from "react";
import {Box, Container, Text, TouchableOpacity} from "@/atoms";
import NoteList from "@/components/note-list.tsx";
import HeaderBar from "@/components/header-bar.tsx";
import FeatherIcon from "@/components/icon.tsx";
import {CompositeScreenProps} from "@react-navigation/native";
import {DrawerScreenProps} from "@react-navigation/drawer";
import {HomeDrawerParamList, RootStackParamList} from "@/navs.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import useStickyHeader from "@/hooks/use-sticky-header.ts";
import MoveNoteSheet, {
  type MoveNoteSheet as MoveNoteSheetType
} from "@/components/move-note-sheet.tsx";
import ThemePicker from "@/components/theme-picker.tsx";

type Props =
 CompositeScreenProps<
  DrawerScreenProps<
   HomeDrawerParamList, "Main">,
  NativeStackScreenProps<RootStackParamList
  >>

export default function MainScreen({navigation}: Props){
  const [concealNoteListItem, setConcealNoteListItem] = useState<(() => void) | null>(null);
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight,
  } = useStickyHeader();

  const refThemePicker = useRef<ThemePicker>(null);
  const refMoveNoteSheet = useRef<MoveNoteSheetType>(null);

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  const handleMenuToggle = useCallback(() => {
    const {current: menu} = refThemePicker;

    if(menu) {
      menu.show();
    }
  }, []);

  const handleNoteListItemPress = useCallback((noteId: string) => {
    navigation.navigate("Detail", { noteId });
  }, []);

  const handleNoteListItemSwipeLeft = useCallback((_noteId: string, conceal: () => void) => {
    const { current: menu } = refMoveNoteSheet;

    if(menu) {
      menu.show();
      setConcealNoteListItem(() => conceal);
    }
  }, []);

  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem();
    setConcealNoteListItem(null);
  }, [concealNoteListItem]);

  return (
   <Container alignItems={"center"} justifyContent={'center'}>
     <NoteList
      contentInsetTop={headerBarHeight}
      onScroll={handleScroll}
      onItemPress={handleNoteListItemPress}
      onItemSwipeLeft={handleNoteListItemSwipeLeft}
     />
     <HeaderBar
      style={headerBarStyle}
      onLayout={handleNoteListLayout}
     >
       <TouchableOpacity m="xs" p='xs' rippleBorderless onPress={
          handleSidebarToggle
       }>
         <FeatherIcon name="menu" size={22}/>
       </TouchableOpacity>
       <Box flex={1} alignItems="center" >
         <Text fontWeight="bold">All Notes</Text>
       </Box>
       <TouchableOpacity
        m="xs"
        p='xs'
        rippleBorderless
        onPress={handleMenuToggle}
       >
         <FeatherIcon name="more-vertical" size={22}/>
       </TouchableOpacity>
     </HeaderBar>
     <MoveNoteSheet
      ref={refMoveNoteSheet}
      onClose={handleMoveNoteSheetClose}
     />
     <ThemePicker ref={refThemePicker}/>
   </Container>
  )
};
