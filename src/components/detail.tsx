import {Box, Container, ScrollView, Text} from "@/atoms";
import Navbar from "@/components/navbar.tsx";
import {editingNoteIdAtom} from "@/states/editor.ts";
import {useAtom} from "jotai";
import NOTES from "@/fixtures/notes.ts";
import {ReactNode} from "react";

type Props = {
  renderNavBarLeft: () => ReactNode;
}

export default function DetailScreen({renderNavBarLeft}: Props){
  const [editingNoteId] = useAtom(editingNoteIdAtom);
  const note = NOTES.find(n => n.id === editingNoteId)

  return (
    <Container flex={1}>
      <Navbar>
        {renderNavBarLeft()}
        <Box flex={1}>
          <Text
           variant="navbar"
           textAlign="center"
          >
            Editor
          </Text>
        </Box>
        <Box width={36}/>
      </Navbar>
      <ScrollView flex={1} p="sm">
        <Text fontWeight="bold" fontSize={24} m="sm">
          {note?.title}
        </Text>
        <Text fontSize={20} m="sm">
          {note?.body}
        </Text>
      </ScrollView>
    </Container>
  );
}
