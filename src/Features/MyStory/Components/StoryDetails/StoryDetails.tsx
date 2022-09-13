import styles from "./StoryDetails.module.scss"
import Map from "../../Components/Map/Map"
import { Coords } from "../MyStory.types"

interface Props {
  currentCoords: Coords
  description: string | undefined
}

const StoryDetails = ({ currentCoords, description }: Props) => {
  return (
    <div className={styles.StoryDetails}>
      <div className={styles.Map}>
        <Map currentCoords={currentCoords} />
      </div>
      <div className={styles.StoryDetail}>{description}</div>
    </div>
  )
}

export default StoryDetails
