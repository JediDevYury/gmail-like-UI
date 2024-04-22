import {createBox} from '@shopify/restyle';
import {Theme} from "@/themes";
import {FlatList, FlatListProps} from "react-native";
import {Note} from "@/models.ts";
import {useCallback} from "react";
import NoteListItem from "@/components/note-list-item.tsx";
import NOTES from "@/fixtures/notes.ts";

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList);

interface NoteListProps {}

const NoteList = ({}: NoteListProps) => {
  const renderItem = useCallback(({item}: {item: Note}) => {
    return (
     <NoteListItem {...item}/>
    );
  }, []);

  return (
   <StyledFlatList
    data={NOTES}
    contentInsetAdjustmentBehavior={'automatic'}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    width={'100%'}
   />
  );
};

export default NoteList;
