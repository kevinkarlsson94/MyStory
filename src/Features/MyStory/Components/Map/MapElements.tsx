import { scrollToTopOfPage } from "../../Helpers/scrollToTopOfPage"
import { Popup } from "react-map-gl"

import styles from "./Map.module.scss"
import { Story } from "../../Models/MyStory.types"

export const GoToTopButton = () => {
  return (
    <button onClick={() => scrollToTopOfPage()} className={styles.GoToTop}>
      Go to top 👆
    </button>
  )
}

interface MapPopupProps {
  latitude: number
  longitude: number
  selectedStory: Story
}

export const MapPopup = ({ latitude, longitude, selectedStory }: MapPopupProps) => (
  <Popup latitude={latitude} longitude={longitude} closeButton={false} className={styles.Popup}>
    <h3>{selectedStory.locationName}</h3>
    <i>
      {selectedStory.country} - {selectedStory.date}
    </i>
    <p>{selectedStory.description}</p>
    {selectedStory.image && <img alt={selectedStory.title} src={selectedStory.image} />}
  </Popup>
)
