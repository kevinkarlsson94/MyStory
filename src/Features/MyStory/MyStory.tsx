import Map from "./Components/Map/Map"
import styles from "./MyStory.module.scss"
import { useEffect, useState } from "react"
import Filter, { FilterState, initialFilterState } from "./Components/Filter/Filter"
import { Coords, Story } from "./Components/MyStory.types"
import StoriesList from "./Components/StoriesList/StoriesList"
import { TimelineHeader } from "./Components/TimelineHeader/TimelineHeader"
import Ordering, { initialOrderState, OrderingState } from "./Components/Ordering/Ordering"
import { stories } from "./Models/MyStory.data"
import useSetOrdering from "./Components/Hooks/useSetOrdering"
import StoryDetails from "./Components/StoryDetails/StoryDetails"

const MyStory = () => {
  const initialCoords = stories[0].coords

  const [currentCoords, setCurrentCoords] = useState<Coords>({
    latitude: initialCoords.latitude,
    longitude: initialCoords.longitude,
  })
  const [currentStories, setCurrentStories] = useState<Story[]>(stories)
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [filterState, setFilterState] = useState<FilterState>(initialFilterState)
  const [orderingState, setOrderingState] = useState<OrderingState>(initialOrderState)

  useSetOrdering(orderingState, setCurrentStories, currentStories)

  useEffect(() => {
    if (filterState) {
      // const filter = () => {
      //   const filterCategory = (s: Story) => s.category === filterState.category
      //   const filterYear = (s: Story) => new Date(s.date).getFullYear().toString() === filterState.year
      //   return stories.filter((s) => filterCategory(s)).filter((s) => filterYear(s))
      // }
      //  console.log("asd", filter())
      // setCurrentStories(filter())
      // if (filterState.category) {
      //   setCurrentStories(() => stories.filter((story) => story.category === filterState.category))
      // }
      // if (filterState.year) {
      //   setCurrentStories(() => stories.filter((story) => new Date(story.date).getFullYear().toString() === filterState.year))
      // }
    } else {
      setCurrentStories(stories)
    }
  }, [filterState])

  return (
    <div className={styles.MyStory}>
      <div className={styles.Timeline}>
        <TimelineHeader />
        <Filter setFilterState={setFilterState} filterState={filterState} />
        <Ordering setOrderingState={setOrderingState} orderingState={orderingState} />
        <StoriesList.Container>
          {currentStories.map(({ ...storyProps }) => (
            <StoriesList.Item
              key={storyProps.title}
              {...storyProps}
              setCurrentCoords={setCurrentCoords}
              setSelectedStory={setSelectedStory}
            />
          ))}
        </StoriesList.Container>
      </div>

      <StoryDetails currentCoords={currentCoords} description={selectedStory?.description} />
    </div>
  )
}

export default MyStory
