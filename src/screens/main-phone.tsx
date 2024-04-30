import {Container} from "@/atoms";
import {HomeDrawerParamList, RootStackParamList} from "@/navs.tsx";
import {CompositeScreenProps} from "@react-navigation/native";
import {DrawerScreenProps} from "@react-navigation/drawer";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import NoteListScreenForPhone from "@/screens/note-list-screen-for-phone.tsx";

type Props = CompositeScreenProps<
 DrawerScreenProps<HomeDrawerParamList, 'Main'>,
 NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForPhone({navigation}:Props) {
  return (
   <Container
    justifyContent="center"
    alignItems="center"
   >
     <NoteListScreenForPhone navigation={navigation}/>
   </Container>
  )
}
