import { Dispatch, ReactElement, SetStateAction } from "react"
import { CategoryType } from "../Filter/Filter"
import { Coords, Story } from "../MyStory.types"

import styles from "./StoriesList.module.scss"

interface StoriesListItemProps {
  title: string
  date: string
  description: string
  category: CategoryType
  setCurrentCoords: Dispatch<SetStateAction<Coords>>
  setSelectedStory: Dispatch<SetStateAction<Story | null>>
  coords: Coords
}

interface StoriesListProps {
  children: ReactElement | ReactElement[]
}

const StoriesListItem = ({ title, date, description, category, setCurrentCoords, coords, setSelectedStory }: StoriesListItemProps) => (
  <li
    className={styles.StoriesListItem}
    key={title}
    onClick={() => {
      setCurrentCoords(coords)
      setSelectedStory({ title, date, description, coords, category })
    }}
  >
    <h3>{title}</h3>
    <i>{date}</i>
    <p>{description}</p>
  </li>
)

const StoriesList = ({ children }: StoriesListProps) => <ul>{children}</ul>

export default {
  Container: StoriesList,
  Item: StoriesListItem,
}
