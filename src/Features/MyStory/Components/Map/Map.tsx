import ReactMapGl from "react-map-gl"

import { useEffect, useRef } from "react"
import { Story } from "../../Models/MyStory.types"
import { getMapToken } from "../../Helpers/getMapToken"
// import { getMapToken } from "../../Helpers/getMapToken"
import { MapPopup, GoToTopButton } from "./MapElements"

interface Props {
  selectedStory: Story
}

const Map = ({ selectedStory }: Props) => {
  const { coords } = selectedStory
  const mapRef = useRef<any>()

  useEffect(() => {
    if (mapRef && coords) {
      mapRef.current?.flyTo({ center: [coords.longitude, coords.latitude], duration: 2000 })
    }
  }, [coords])

  return (
    <>
      <GoToTopButton />
      <ReactMapGl
        ref={mapRef}
        initialViewState={{
          longitude: coords.longitude,
          latitude: coords.latitude,
          zoom: 14,
        }}
        mapboxAccessToken={getMapToken()}
        mapStyle="mapbox://styles/miwii123/cl7uwo312000z15qd0irzbxj3"
        style={{ width: "100%", height: "800px" }}
      >
        {coords.latitude && coords.longitude && (
          <MapPopup latitude={coords.latitude} longitude={coords.longitude} selectedStory={selectedStory} />
        )}
      </ReactMapGl>
    </>
  )
}

export default Map
