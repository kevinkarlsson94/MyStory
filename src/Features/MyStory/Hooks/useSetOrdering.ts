import { Dispatch, SetStateAction, useEffect } from "react"
import { Story } from "../Models/MyStory.types"
import { OrderingState } from "../Components/Ordering/Ordering"

const useSetOrdering = (orderingState: OrderingState, setCurrentStories: Dispatch<SetStateAction<Story[]>>, currentStories: Story[]) => {
  useEffect(() => {
    if (orderingState.orderByName === "asc") {
      setCurrentStories([...currentStories.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))])
    }
    if (orderingState.orderByName === "desc") {
      setCurrentStories([...currentStories.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1))])
    }

    if (orderingState.orderByYear === "asc") {
      setCurrentStories([...currentStories.sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())])
    }
    if (orderingState.orderByYear === "desc") {
      setCurrentStories([...currentStories.sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate())])
    }
  }, [currentStories, orderingState, setCurrentStories])
}

export default useSetOrdering
