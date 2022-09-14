import { Story } from "./Components/MyStory.types"

export const removeDuplicatesFromArray = <T extends unknown[]>(array: T): unknown[] => Array.from(new Set(array))

export const scrollToBottomOfPage = () =>
  window.scroll({
    top: document.body.offsetHeight,
    behavior: "smooth",
  })
