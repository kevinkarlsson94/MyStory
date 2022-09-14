import { Dispatch, SetStateAction, useEffect } from "react"
import { FilterState } from "../Filter/Filter"
import { Story } from "../MyStory.types"

const useSetFiltering = (filterState: FilterState, setCurrentStories: Dispatch<SetStateAction<Story[]>>, stories: Story[]) => {
  useEffect(() => {
    // if (filterState.category || filterState.year) {
    //   const filter = () => {
    //     const filterCategory = (s: Story) => s.category === filterState.category
    //     const filterYear = (s: Story) => new Date(s.date).getFullYear().toString() === filterState.year
    //     return stories.filter((s) => filterCategory(s)).filter((s) => filterYear(s))
    //   }
    // setCurrentStories(filter())

    console.log("filterState", filterState)

    //   if (filterState.category) {
    //     setCurrentStories((cs) => cs.filter((story) => story.category === filterState.category))
    //   }
    //   if (filterState.year) {
    //     setCurrentStories((cs) => cs.filter((story) => new Date(story.date).getFullYear().toString() === filterState.year))
    //   }
    // } else {
    //   setCurrentStories(stories)
    // }
  }, [filterState])
}

export default useSetFiltering
