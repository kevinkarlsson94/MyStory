import { Dispatch, SetStateAction, useEffect } from "react"
import { OrderingState, Story } from "../Models/MyStory.types"

const useSetOrdering = (orderingState: OrderingState, setCurrentStories: Dispatch<SetStateAction<Story[]>>, currentStories: Story[]) => {
  useEffect(() => {
    if (orderingState.orderByName === "asc") {
      setCurrentStories((cs) => [...cs.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))])
    }
    if (orderingState.orderByName === "desc") {
      setCurrentStories((cs) => [...cs.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1))])
    }

    if (orderingState.orderByYear === "asc") {
      setCurrentStories((cs) => [...cs.sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())])
    }
    if (orderingState.orderByYear === "desc") {
      setCurrentStories((cs) => [...cs.sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate())])
    }
  }, [orderingState, setCurrentStories])
}

export default useSetOrdering
