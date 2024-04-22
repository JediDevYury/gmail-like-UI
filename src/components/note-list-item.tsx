import {Note} from "@/models.ts";
import {Box, Text} from "@/atoms";

export interface NoteListItemProps extends Note {}

const NoteListItem = (props: NoteListItemProps) => {
  return (
   <Box bg="$background">
     <Box bg="$background" px="lg" py="sm">
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
     </Box>
   </Box>
  );
};

export default NoteListItem;
