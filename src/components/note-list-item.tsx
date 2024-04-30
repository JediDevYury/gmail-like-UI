import {Note} from "@/models.ts";
import {Box, Text, TouchableOpacity} from "@/atoms";
import {memo, useCallback} from "react";
import NoteListItemActionView from "@/components/note-list-item-action-view.tsx";
import {SharedValue} from "react-native-reanimated";
import SwipeableView from "@/components/swipeable-view.tsx";

export interface NoteListItemProps extends Note {
  onPress?: (noteId: string) => void;
  onSwipeLeft?: (noteId: string, done: () => void) => void;
}

const NoteListItem = memo((props: NoteListItemProps) => {
  const {onPress, onSwipeLeft, id} = props;

  const handlePress = useCallback(() => {
    onPress?.(id);
  }, [onPress, id]);

  const handleSwipeLeft = useCallback((done: () => void) => {
    if(onSwipeLeft) {
      onSwipeLeft(id, done);
    }
  }, [id, onSwipeLeft]);

  const renderBackView = useCallback(({progress} : {
    progress: Readonly<SharedValue<number>>;
  }) => {
    return (
     <NoteListItemActionView progress={progress}/>
    );
  }, []);

  return (
   <SwipeableView
    onSwipeLeft={handleSwipeLeft}
    backView={renderBackView}
    bg="yellow"
   >
     <Box bg="$background">
       <TouchableOpacity px="lg" py="sm" onPress={handlePress}>
         <Text
          ellipsizeMode="tail"
          fontWeight="bold"
          numberOfLines={1}
          mb="xs"
         >
           {props.title}
         </Text>
         <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          fontSize={14}
          opacity={0.7}
         >
           {props.body}
         </Text>
       </TouchableOpacity>
     </Box>
   </SwipeableView>
  );
});

export default NoteListItem;
