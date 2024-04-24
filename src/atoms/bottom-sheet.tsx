import RNBottomSheet, {BottomSheetProps} from "@gorhom/bottom-sheet";
import {ColorProps, useTheme} from "@shopify/restyle";
import {Theme} from "@/themes";
import {forwardRef} from "react";

type Props = BottomSheetProps & ColorProps<Theme>

const BottomSheet = forwardRef<RNBottomSheet, Props>(({...restProps}, ref) => {
  const theme = useTheme<Theme>()
  const bgColor = theme.colors['$background']
  const handleColor = theme.colors['$foreground']

  return (
   <RNBottomSheet
     {...restProps}
     ref={ref}
     handleIndicatorStyle={
      {
        backgroundColor: handleColor,
        opacity: 0.8
      }
     }
     backgroundStyle={{backgroundColor: bgColor}}
   >
      {restProps.children}
   </RNBottomSheet>
  )
})

export default BottomSheet
