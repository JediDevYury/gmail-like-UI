import Box, {BoxProps} from "@/atoms/box.ts";

const Container = (props: BoxProps) => {
  return (
   <Box {...props} backgroundColor={"$background"}>
     {props.children}
   </Box>
  );
};


export default Container;
