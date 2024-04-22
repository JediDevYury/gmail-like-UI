import { Theme } from '@/themes'
import { createBox } from '@shopify/restyle'
import {ComponentProps, ReactNode} from "react";

const Box = createBox<Theme>()
export type BoxProps = ComponentProps<typeof Box> & {children: ReactNode}

export default Box
