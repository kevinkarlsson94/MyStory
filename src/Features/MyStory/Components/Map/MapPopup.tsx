import { Popup } from "react-map-gl"
import { Story } from "../MyStory.types"

import styles from "./Map.module.scss"

interface Props {
  latitude: number
  longitude: number
  selectedStory: Story
}

const MapPopup = ({ latitude, longitude, selectedStory }: Props) => (
  <Popup latitude={latitude} longitude={longitude} closeButton={false} className={styles.Popup}>
    <h3>{selectedStory.locationName}</h3>
    <i>
      {selectedStory.country} - {selectedStory.date}
    </i>
    <p>{selectedStory.description}</p>
  </Popup>
)

export default MapPopup
