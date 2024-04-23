import {SharedValue, useAnimatedStyle} from "react-native-reanimated";
import {Box} from "@/atoms";
import AnimatedBox from "@/components/animated-box.tsx";
import FeatherIcon from "@/components/icon.tsx";

interface Props {
  progress: Readonly<SharedValue<number>>;
}

const NoteListItemActionView = ({progress}: Props) => {
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: progress.value}],
    };
  })
  return (
   <Box
    flex={1}
    bg="$primary"
    flexDirection="row"
    alignItems="center"
    justifyContent="flex-end"
    pr="xl"
   >
    <AnimatedBox
     flexDirection="row"
     alignItems="center"
     justifyContent="center"
     style={iconStyle}
    >
      <FeatherIcon name="folder" color="white" size={18}/>
      <FeatherIcon name="arrow-right" color="white" size={12}/>
    </AnimatedBox>
   </Box>
  )
};

export default NoteListItemActionView;
