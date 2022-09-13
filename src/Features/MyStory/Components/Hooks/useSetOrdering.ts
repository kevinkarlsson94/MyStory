import { Dispatch, SetStateAction, useEffect } from "react"
import { Story } from "../MyStory.types"
import { OrderingState } from "../Ordering/Ordering"

const useSetOrdering = (orderingState: OrderingState, setCurrentStories: Dispatch<SetStateAction<Story[]>>, currentStories: Story[]) => {
  useEffect(() => {
    if (orderingState.orderByName === "asc") {
      setCurrentStories(currentStories.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)))
    }
    if (orderingState.orderByName === "desc") {
      setCurrentStories((cs) => {
        return cs.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1))
      })
    }
  }, [currentStories, orderingState, setCurrentStories])
}

export default useSetOrdering
