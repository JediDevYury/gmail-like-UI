import AnimatedBox, {AnimatedBoxProps} from "@/components/animated-box.tsx";
import {TextInput, TouchableOpacity} from "@/atoms";
import {useCallback, useRef} from "react";
import {useAtom} from "jotai";
import {searchInputHasFocusAtom, searchQueryAtom} from "@/states/search-bar.tsx";
import { TextInput as RNTextInput } from 'react-native'
import HeaderBarLeftButton from "@/components/header-bar-left-button.tsx";
import FeatherIcon from "@/components/icon.tsx";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useTheme} from "@shopify/restyle";
import {Theme} from "@/themes";
import {useAnimatedStyle, withTiming} from "react-native-reanimated";

type Props = AnimatedBoxProps & {
  onSidebarToggle: () => void;
};

const HeaderBar = (props: Props) => {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme<Theme>();

  const {onSidebarToggle, ...restProps} = props;
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [searchInputHasFocus, setSearchInputHasFocus] = useAtom(searchInputHasFocusAtom)

  const refSearchInput = useRef<RNTextInput>(null);

  const handleSearchInputFocus = () => {
    setSearchInputHasFocus(true);
  }

  const handleSearchInputBlur = () => {
    setSearchInputHasFocus(false);
  }

  const handleLeftButtonPress = useCallback(() => {
    if(searchInputHasFocus) {
      const {current: input} = refSearchInput;
      if(input) input.blur();
      setSearchQuery("")
    } else {
      onSidebarToggle();
    }
  }, [searchInputHasFocus, onSidebarToggle]);

  const handleClearButtonPress = () => {
    setSearchQuery("");
  };

  const safeAreaStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(searchInputHasFocus ? 1 : 0)
    }
  }, [searchInputHasFocus]);

  const barStyle = useAnimatedStyle(() => {
     return {
       marginHorizontal: withTiming(searchInputHasFocus ? 0 : theme.spacing.lg),
       borderRadius: withTiming(searchInputHasFocus ? 0 : theme.borderRadii.lg, {
         duration: 600
       }),
     }
   },
   [searchInputHasFocus]
  )

  return (
   <AnimatedBox
    position="absolute"
    top={0}
    left={0}
    right={0}
    {...restProps}
   >
     <AnimatedBox
      position="absolute"
      top={-safeAreaInsets.top}
      left={0}
      right={0}
      bottom={0}
      bg="$headerBarBackground"
      style={safeAreaStyle}
     />
     <AnimatedBox
      flexDirection="row"
      alignItems="center"
      mx="lg"
      my="md"
      px="sm"
      minHeight={44}
      bg="$headerBarBackground"
      style={barStyle}
     >
       <HeaderBarLeftButton
        onPress={handleLeftButtonPress}
        backButtonVisible={searchInputHasFocus}
       />
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
       {searchQuery.length > 0 && (
        <TouchableOpacity
         m="xs"
         p="xs"
         rippleBorderless
         onPress={handleClearButtonPress}
        >
          <FeatherIcon name="x" size={22}/>
        </TouchableOpacity>
       )}
     </AnimatedBox>
   </AnimatedBox>
  );
};


export default HeaderBar;
