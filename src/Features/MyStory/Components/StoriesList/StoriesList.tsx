import { Dispatch, ReactElement, SetStateAction } from "react"
import { Story } from "../MyStory.types"
import clsx from "clsx"

import styles from "./StoriesList.module.scss"

interface StoriesListItemProps {
  story: Story
  setSelectedStory: Dispatch<SetStateAction<Story>>
  selectedStory: Story
}

interface StoriesListProps {
  children: ReactElement | ReactElement[]
}

const StoriesListItem = ({ story, setSelectedStory, selectedStory }: StoriesListItemProps) => (
  <li
    key={story.title}
    onClick={() => setSelectedStory(story)}
    className={clsx(styles.StoriesListItem, { [styles.Selected]: story.title === selectedStory.title })}
  >
    <h3>{story.title}</h3>
    <i>{story.date}</i>
  </li>
)

const StoriesList = ({ children }: StoriesListProps) => <ul className={styles.StoriesList}>{children}</ul>

export default {
  Container: StoriesList,
  Item: StoriesListItem,
}
