import { Container } from '@/atoms'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ResponsiveLayout from "@/components/responsive-layout.tsx";
import MainScreenForTablet from "@/screens/main-tablet.tsx";
import MainScreenForPhone from "@/screens/main-phone.tsx";

type Props = CompositeScreenProps<
 DrawerScreenProps<HomeDrawerParamList, 'Main'>,
 NativeStackScreenProps<RootStackParamList>
>

export default function MainScreen(props: Props) {
  return (
   <Container style={{
     flex: 1,
     justifyContent: 'center',
   }}>
     <ResponsiveLayout
      onLayoutChange={(layout) => console.log(layout)}
      renderOnPhone={<MainScreenForPhone {...props} />}
      renderOnTablet={<MainScreenForTablet {...props} />}
     />
   </Container>
  )
}
