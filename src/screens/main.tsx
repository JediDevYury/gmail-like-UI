import React from "react";
import {Box, Container, Text, TouchableOpacity} from "@/atoms";
import NoteList from "@/components/note-list.tsx";
import HeaderBar from "@/components/header-bar.tsx";
import FeatherIcon from "@/components/icon.tsx";

export default function MainScreen(){
  return (
   <Container alignItems={"center"} justifyContent={'center'}>
     <NoteList/>
     <HeaderBar>
       <TouchableOpacity m="xs" p='xs' rippleBorderless>
         <FeatherIcon name="menu" size={22}/>
       </TouchableOpacity>
       <Box flex={1} alignItems="center" >
         <Text fontWeight="bold">All Notes</Text>
       </Box>
       <TouchableOpacity m="xs" p='xs' rippleBorderless>
         <FeatherIcon name="more-vertical" size={22}/>
       </TouchableOpacity>
     </HeaderBar>
   </Container>
  )
};
