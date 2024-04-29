import React, {useCallback} from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/navs.tsx";
import {Box, Container, ScrollView, Text, TouchableOpacity} from "@/atoms";
import Navbar from "@/components/navbar.tsx";
import FeatherIcon from "@/components/icon.tsx";
import {editingNoteIdAtom} from "@/states/editor.ts";
import {useAtom} from "jotai";
import NOTES from "@/fixtures/notes.ts";

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList>['navigation']
}

export default function DetailScreen({navigation}: Props){
  const [editingNoteId] = useAtom(editingNoteIdAtom);
  const note = NOTES.find(n => n.id === editingNoteId)
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container flex={1}>
      <Navbar>
        <TouchableOpacity onPress={handleBackPress}>
          <FeatherIcon name="arrow-left" size={24}/>
        </TouchableOpacity>
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
