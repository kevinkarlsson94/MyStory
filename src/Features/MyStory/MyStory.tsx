import styles from "./MyStory.module.scss"
import { useState } from "react"

import { Story } from "./Models/MyStory.types"
import { initialOrderState, OrderingState } from "./Components/Ordering/Ordering"
import { stories } from "./Models/MyStory.data"
import useSetOrdering from "./Hooks/useSetOrdering"
import { Map, StoriesList, Ordering, Timeline, Navigation } from "./Components"

const MyStory = () => {
  const [currentStories, setCurrentStories] = useState<Story[]>(stories)
  const [selectedStory, setSelectedStory] = useState<Story>(stories[0])
  const [orderingState, setOrderingState] = useState<OrderingState>(initialOrderState)

  useSetOrdering(orderingState, setCurrentStories, currentStories)

  return (
    <div className={styles.MyStory}>
      <Timeline>
        <Ordering setOrderingState={setOrderingState} orderingState={orderingState} />
        <StoriesList.Container>
          {currentStories.map((story, index) => (
            <StoriesList.Item key={story.title} selectedStory={selectedStory} story={story} setSelectedStory={setSelectedStory} />
          ))}
        </StoriesList.Container>
      </Timeline>
      <Navigation currentStories={currentStories} setSelectedStory={setSelectedStory} selectedStory={selectedStory} />
      <Map selectedStory={selectedStory} />
    </div>
  )
}

export default MyStory
