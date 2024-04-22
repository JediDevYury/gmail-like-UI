import AnimatedBox, {AnimatedBoxProps} from "@/components/animated-box.tsx";
import {Bar} from "@/atoms";

const HeaderBar = ({children, ...rest}: AnimatedBoxProps) => {
  return (
   <AnimatedBox
    position="absolute"
    top={80}
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
