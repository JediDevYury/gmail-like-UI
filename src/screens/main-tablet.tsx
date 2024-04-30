import {HomeDrawerParamList, RootStackParamList} from "@/navs.tsx";
import {CompositeScreenProps} from "@react-navigation/native";
import {DrawerScreenProps} from "@react-navigation/drawer";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import NoteListScreenForTablet from "@/screens/note-list-screen-for-tablet.tsx";
import React, {useCallback} from "react";
import ThreeColumnLayout from "@/components/three-column-layout.tsx";
import {Box} from "@/atoms";

type Props = CompositeScreenProps<
 DrawerScreenProps<HomeDrawerParamList, 'Main'>,
 NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForTablet({navigation}:Props) {
  const toggleSidebar = useCallback(() => {
    //TODO: implement this
  }, [])

  return (
   <>
     <ThreeColumnLayout
      renderLeftView={() => (<Box flex={1} bg={'red'} />)}
      renderMiddleView={
       () => (
        <NoteListScreenForTablet
         navigation={navigation}
         onSidebarToggle={toggleSidebar}
        />
       )
      }
      renderRightView={() => (<Box flex={1} bg={'blue'} />)}
      leftViewVisible={true}
      middleViewVisible={true}
     />
   </>
  )
}
