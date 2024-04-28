import {createBox} from '@shopify/restyle';
import {Theme} from "@/themes";
import {FlatListProps, NativeScrollEvent, NativeSyntheticEvent} from "react-native";
import {Note} from "@/models.ts";
import {ComponentType, useCallback} from "react";
import NoteListItem from "@/components/note-list-item.tsx";
import NOTES from "@/fixtures/notes.ts";
import Animated, {AnimatedProps} from "react-native-reanimated";
import {Box} from "@/atoms";

const StyledFlatList = createBox<Theme, AnimatedProps<FlatListProps<Note>>>(Animated.FlatList);

interface Props {
  contentInsetTop: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onItemPress: (noteId: string) => void;
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void;
  ListHeaderComponent?: ComponentType<any> | null | undefined;
}

const NoteList = ({
  onScroll,
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft,
  ListHeaderComponent
}: Props) => {

  const renderItem = useCallback(({item}: {item: Note}) => {
    return (
     <NoteListItem {...item} onPress={onItemPress} onSwipeLeft={onItemSwipeLeft}/>
    );
  }, [onItemPress, onItemSwipeLeft]);

  return (
   <StyledFlatList
    data={NOTES}
    contentInsetAdjustmentBehavior={'automatic'}
    renderItem={renderItem}
    onScroll={onScroll}
    scrollEventThrottle={16}
    ListHeaderComponent={
      <Box>
        <>
          <Box width="100%" height={contentInsetTop} />
          {ListHeaderComponent && <ListHeaderComponent />}
        </>
      </Box>
    }
    keyExtractor={item => item.id}
    width={'100%'}
   />
  );
};

export default NoteList;
