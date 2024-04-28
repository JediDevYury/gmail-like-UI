import {ComponentPropsWithRef, forwardRef} from "react";
import {TextInput as RNTextInput} from "react-native";
import {Theme} from "@/themes";
import {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  ColorProps,
  SpacingProps,
  SpacingShorthandProps,
  LayoutProps,
  TypographyProps,
  composeRestyleFunctions,
  spacing,
  spacingShorthand,
  color,
  backgroundColor,
  backgroundColorShorthand,
  layout,
  typography,
  BorderProps,
  border,
  useRestyle,
  useTheme,
  useResponsiveProp,
  ResponsiveValue,
} from "@shopify/restyle";

type RestyleProps = SpacingProps<Theme>
  & SpacingShorthandProps<Theme>
  & ColorProps<Theme>
  & BackgroundColorProps<Theme>
  & BackgroundColorShorthandProps<Theme>
  & LayoutProps<Theme>
  & TypographyProps<Theme>
  & BorderProps<Theme>;

const restyleFunctions = composeRestyleFunctions([
  spacing,
  spacingShorthand,
  color,
  border,
  backgroundColor,
  backgroundColorShorthand,
  layout,
  typography
]);

type TextInputProps = ComponentPropsWithRef<typeof RNTextInput>
 & RestyleProps
 & {
  placeholderColor?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
};

const TextInput = forwardRef<RNTextInput, TextInputProps>(({placeholderColor, ...rest}, ref) => {
  const props = useRestyle(restyleFunctions, rest as any);
  const theme = useTheme<Theme>();
  const placeholderTextColorProp = placeholderColor && useResponsiveProp(placeholderColor);

  const placeholderTextColorValue = placeholderTextColorProp && theme.colors[placeholderTextColorProp];

  return (
   <RNTextInput
    ref={ref}
    {...props}
    placeholderTextColor={placeholderTextColorValue}
   />);
});

export default TextInput;
