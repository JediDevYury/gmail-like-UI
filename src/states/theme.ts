import {atom} from "jotai";
import {Theme, ThemeNames, themes} from "@/themes";

const actionThemeId = atom<ThemeNames>('light')

export const activeThemeAtom = atom<Theme>(get => {
  const themeId = get(actionThemeId)
  const themeIndex = themes.findIndex(theme => theme.id === themeId)

  if(themeIndex >= 0) {
    return themes[themeIndex].theme
  } else {
    return themes[0].theme
  }
})

export default actionThemeId;
