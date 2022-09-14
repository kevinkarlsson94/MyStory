import { Dispatch, SetStateAction } from "react"
import Button from "../../../../Components/Button/Button"
import { Story } from "../../Models/MyStory.types"

import styles from "./Navigation.module.scss"

interface Props {
  currentStories: Story[]
  selectedStory: Story
  setSelectedStory: Dispatch<SetStateAction<Story>>
}

const Navigation = ({ currentStories, selectedStory, setSelectedStory }: Props) => {
  const gotoNextStory = () => {
    const currentIndexOfStory = currentStories.indexOf(selectedStory)
    if (currentIndexOfStory < currentStories.length - 1) {
      setSelectedStory(currentStories[currentIndexOfStory + 1])
    } else {
      setSelectedStory(currentStories[0])
    }
  }
  const gotoPreviousStory = () => {
    const currentIndexOfStory = currentStories.indexOf(selectedStory)
    if (currentIndexOfStory > 0) {
      setSelectedStory(currentStories[currentIndexOfStory - 1])
    } else {
      setSelectedStory(currentStories[currentStories.length - 1])
    }
  }

  return (
    <div className={styles.Navigation}>
      <Button onClick={gotoPreviousStory} label="👈 Previous story" />
      <Button onClick={gotoNextStory} label="Next story 👉" />
    </div>
  )
}

export default Navigation