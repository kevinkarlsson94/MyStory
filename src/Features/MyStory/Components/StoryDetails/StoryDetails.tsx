import styles from "./StoryDetails.module.scss"
import Map from "../../Components/Map/Map"
import { Story } from "../MyStory.types"

interface Props {
  selectedStory: Story
  description?: string
}

const StoryDetails = ({ selectedStory, description }: Props) => {
  return (
    <div className={styles.StoryDetails}>
      <div className={styles.Map}>
        <Map selectedStory={selectedStory} />
      </div>
      {/* <div className={styles.StoryDetail} dangerouslySetInnerHTML={{ __html: String(description) }} /> */}
    </div>
  )
}

export default StoryDetails
