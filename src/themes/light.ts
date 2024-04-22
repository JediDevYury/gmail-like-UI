import {createTheme} from '@shopify/restyle';
import {StatusBarStyle} from "react-native";

const palette = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper100: '#aeaeae',
  paper300: '#767577',
  paper900: '#202020',
  blue70: '#2185d0',
  navy20: '#171a21',
  navy900: '#b9babc'
}

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  colors: {
    white: palette.white,
    black: palette.black,
    red: palette.red,
    blue: palette.blue,
    yellow: palette.yellow,

    $primary: palette.blue70,
    $windowBackground: '#f0f0f0',
    $background: palette.paper10,
    $foreground: palette.paper900,
    $navbarBackground: palette.paper10,
    $navbarBorderBottom: palette.paper100,
    $sidebarBackground: palette.navy20,
    $sidebarForeground: palette.navy900,
    $sidebarSeparator: palette.paper00 + '20',
    $headerBarBackground: palette.paper20,
    $fieldInputBackground: palette.paper00,
    $fieldInputPlaceholderTextColor: palette.paper300
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128
  },
  statusBar: {
    barStyle: 'dark-content' as StatusBarStyle
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16
    },
    sidebar: {
      color: '$sidebarForeground'
    },
    navbar: {
      fontSize: 20
    }
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg'
    }
  },
})
export default theme;

export type Theme = typeof theme
