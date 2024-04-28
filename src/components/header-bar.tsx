import AnimatedBox, {AnimatedBoxProps} from "@/components/animated-box.tsx";
import {Bar, TextInput} from "@/atoms";
import {useRef} from "react";
import {useAtom} from "jotai";
import {searchInputHasFocusAtom, searchQueryAtom} from "@/states/search-bar.tsx";
import { TextInput as RNTextInput } from 'react-native'

const HeaderBar = (props: AnimatedBoxProps) => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [searchInputHasFocus, setSearchInputHasFocus] = useAtom(searchInputHasFocusAtom)

  const refSearchInput = useRef<RNTextInput>(null);

  const handleSearchInputFocus = () => {
    setSearchInputHasFocus(true);
  }

  const handleSearchInputBlur = () => {
    setSearchInputHasFocus(false);
  }

  return (
   <AnimatedBox
    position="absolute"
    top={0}
    left={0}
    right={0}
    {...props}
   >
     <Bar
      variant="headerBar"
      flexDirection="row"
      alignItems="center"
      mx="lg"
      my="md"
      px="sm"
      minHeight={44}
     >
       <TextInput
        ref={refSearchInput}
        ml="sm"
        flex={1}
        fontSize={18}
        autoCapitalize="none"
        color="$foreground"
        placeholder="Search notes"
        placeholderColor="$fieldInputPlaceholderTextColor"
        value={searchQuery}
        onFocus={handleSearchInputFocus}
        onBlur={handleSearchInputBlur}
        onChangeText={setSearchQuery}
       />
     </Bar>
   </AnimatedBox>
  );
};


export default HeaderBar;
