import {Box, SafeAreaView} from "@/atoms";
import {PropsWithChildren} from "react";
import {StyleSheet} from "react-native";

interface Props {}
const Navbar = ({children}: PropsWithChildren<Props>) => {
  return (
   <SafeAreaView
    backgroundColor="$navbarBackground"
    borderBottomColor="$navbarBorderBottom"
    borderBottomWidth={StyleSheet.hairlineWidth}
   >
     <Box
      minHeight={52}
      flexDirection="row"
      alignItems="center"
      px="md"
     >
       {children}
     </Box>
   </SafeAreaView>
  )
}

export default Navbar
