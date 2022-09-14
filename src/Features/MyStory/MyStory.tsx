import styles from "./MyStory.module.scss"
import { useState } from "react"

import { Story } from "./Components/MyStory.types"
import StoriesList from "./Components/StoriesList/StoriesList"
import { TimelineHeader } from "./Components/TimelineHeader/TimelineHeader"
import Ordering, { initialOrderState, OrderingState } from "./Components/Ordering/Ordering"
import { stories } from "./Models/MyStory.data"
import useSetOrdering from "./Components/Hooks/useSetOrdering"
import StoryDetails from "./Components/StoryDetails/StoryDetails"

const MyStory = () => {
  const [currentStories, setCurrentStories] = useState<Story[]>(stories)
  const [selectedStory, setSelectedStory] = useState<Story>(stories[0])
  const [orderingState, setOrderingState] = useState<OrderingState>(initialOrderState)

  useSetOrdering(orderingState, setCurrentStories, currentStories)

  console.log("currentStories", currentStories)

  return (
    <div className={styles.MyStory}>
      <div className={styles.Timeline}>
        <TimelineHeader />
        <Ordering setOrderingState={setOrderingState} orderingState={orderingState} />
        <StoriesList.Container>
          {currentStories.map((story, index) => (
            <StoriesList.Item key={story.title} selectedStory={selectedStory} story={story} setSelectedStory={setSelectedStory} />
          ))}
        </StoriesList.Container>
      </div>

      <StoryDetails selectedStory={selectedStory} description={selectedStory?.description} />
    </div>
  )
}

export default MyStory
