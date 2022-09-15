import { Dispatch, ReactElement, SetStateAction } from "react"
import { Story } from "../../Models/MyStory.types"
import clsx from "clsx"

import styles from "./StoriesList.module.scss"
import { scrollToBottomOfPage } from "../../Helpers/scrollToBottomOfPage"

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
    onClick={() => {
      setSelectedStory(story)
      scrollToBottomOfPage()
    }}
    className={clsx(styles.StoriesListItem, { [styles.Selected]: story.id === selectedStory.id })}
    data-testid={`stories-list-item-${story.id}`}
  >
    <h3>{story.title}</h3>
    <i>{story.date}</i>
  </li>
)

const StoriesList = ({ children }: StoriesListProps) => (
  <ul className={styles.StoriesList} data-testid="stories-list">
    {children}
  </ul>
)

const exportStoriesList = {
  Container: StoriesList,
  Item: StoriesListItem,
}

export default exportStoriesList
