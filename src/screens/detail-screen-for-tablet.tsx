import DetailScreen from "@/components/detail.tsx";
import {TouchableOpacity} from "@/atoms";
import FeatherIcon from "@/components/icon.tsx";
import {ThreeColumnLayoutProps} from "@/components/three-column-layout.tsx";

type Props = ThreeColumnLayoutProps & {
  onDistractionFreeModeToggle: () => void
}

const DetailScreenForTablets = (props: Props) => {
  const {onDistractionFreeModeToggle, middleViewVisible} = props

  return (
   <DetailScreen renderNavBarLeft={() => (
    <TouchableOpacity
     onPress={onDistractionFreeModeToggle}
     flexDirection="row"
     alignItems="center"
     height="100%"
    >
      <FeatherIcon name={
        middleViewVisible ? 'maximize-2' : 'minimize-2'
      } size={24}/>
    </TouchableOpacity>
   )}/>
  );
}

export default DetailScreenForTablets
