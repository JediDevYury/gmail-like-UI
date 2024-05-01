import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/navs.tsx";
import {useCallback} from "react";
import DetailScreen from "@/components/detail.tsx";
import {TouchableOpacity} from "@/atoms";
import FeatherIcon from "@/components/icon.tsx";

const DetailScreenForPhone = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <DetailScreen renderNavBarLeft={() => (
      <TouchableOpacity
       onPress={handleBackPress}
       p="sm"
      >
        <FeatherIcon name='arrow-left' size={24}/>
      </TouchableOpacity>
    )}/>
  );
}

export default DetailScreenForPhone
