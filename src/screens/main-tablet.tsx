import {HomeDrawerParamList, RootStackParamList} from "@/navs.tsx";
import {CompositeScreenProps} from "@react-navigation/native";
import {DrawerScreenProps} from "@react-navigation/drawer";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import NoteListScreenForTablet from "@/screens/note-list-screen-for-tablet.tsx";
import React, {useCallback, useState} from "react";
import ThreeColumnLayout from "@/components/three-column-layout.tsx";
import useResponsiveLayout from "@/hooks/use-responsive-layout.tsx";
import Sidebar from "@/components/sidebar.tsx";
import DetailScreenForTablet from "@/screens/detail-screen-for-tablet.tsx";

type Props = CompositeScreenProps<
 DrawerScreenProps<HomeDrawerParamList, 'Main'>,
 NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForTablet({navigation}:Props) {
  const {isPortrait} = useResponsiveLayout()
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [distractionFreeMode, setDistractionFreeMode] = useState(false)

  const toggleSidebar = useCallback(() => {
    setSidebarVisible(visible => !visible)
  }, [])

  const toggleDistractionFreeMode = useCallback(() => {
    setDistractionFreeMode(enabled => !enabled)
  }, [])

  const leftViewVisible = !isPortrait && sidebarVisible && !distractionFreeMode

  return (
   <>
     <ThreeColumnLayout
      renderLeftView={() => (<Sidebar />)}
      renderMiddleView={
       () => (
        <NoteListScreenForTablet
         navigation={navigation}
         onSidebarToggle={toggleSidebar}
        />
       )
      }
      renderRightView={(viewProps) => (
        <DetailScreenForTablet
        {...viewProps}
        onDistractionFreeModeToggle={toggleDistractionFreeMode}
       />
       )}
      leftViewWidth={260}
      middleViewWidth={360}
      leftViewVisible={leftViewVisible}
      middleViewVisible={!distractionFreeMode}
     />
   </>
  )
}
