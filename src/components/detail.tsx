import React from 'react';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/navs.tsx";
import {Box, Text, TouchableOpacity} from "@/atoms";

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({navigation, route}: Props){
  return (
    <Box
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text>Detail Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
       style={{padding: 12}}
       onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Box>
  );
}
