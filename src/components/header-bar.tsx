import AnimatedBox, {AnimatedBoxProps} from "@/components/animated-box.tsx";
import {Bar} from "@/atoms";
import {ReactNode} from "react";

const HeaderBar = ({children, ...rest}: AnimatedBoxProps & {
  children: ReactNode;
}) => {
  return (
   <AnimatedBox
    position="absolute"
    top={0}
    left={0}
    right={0}
    {...rest}
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
       {children}
     </Bar>
   </AnimatedBox>
  );
};


export default HeaderBar;
