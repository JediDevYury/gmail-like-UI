import {useCallback, useRef, useState} from "react";
import {Container} from "@/atoms";
import NoteList from "@/components/note-list.tsx";
import HeaderBar from "@/components/header-bar.tsx";
import {CompositeScreenProps} from "@react-navigation/native";
import {DrawerScreenProps} from "@react-navigation/drawer";
import {HomeDrawerParamList, RootStackParamList} from "@/navs.tsx";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import useStickyHeader from "@/hooks/use-sticky-header.ts";
import MoveNoteSheet, {
  type MoveNoteSheet as MoveNoteSheetType
} from "@/components/move-note-sheet.tsx";
import ThemePicker from "@/components/theme-picker.tsx";
import NoteListHeaderTitleBar from "@/components/note-list-header-title-bar.tsx";

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

  const refMoveNoteSheet = useRef<MoveNoteSheetType>(null);

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
      ListHeaderComponent={NoteListHeaderTitleBar}
     />
     <HeaderBar
      style={headerBarStyle}
      onLayout={handleNoteListLayout}
     />
     <MoveNoteSheet
      ref={refMoveNoteSheet}
      onClose={handleMoveNoteSheetClose}
     />
   </Container>
  )
};
