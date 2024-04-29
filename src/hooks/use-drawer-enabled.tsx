import {searchInputHasFocusAtom} from "@/states/search-bar.tsx";
import {useAtom} from "jotai";

const useDrawerEnabled = () => {
  const [searchInputHasFocus] = useAtom(searchInputHasFocusAtom);

  return !searchInputHasFocus;
};

export default useDrawerEnabled;
