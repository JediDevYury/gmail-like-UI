import {ComponentProps} from "react";
import Feather from 'react-native-vector-icons/Feather'
import {ColorProps, useResponsiveProp, useTheme} from "@shopify/restyle";
import {Theme} from "@/themes";

export type IconProps = ComponentProps<typeof Feather>

type Props = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon = ({color = '$foreground', ...rest}: Props) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || "$foreground"]

  return (
   <Feather {...rest} color={vColor}/>
  );
};


export default FeatherIcon;
