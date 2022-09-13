import ReactMapGl, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import styles from "./Map.module.scss"
import marker from "../../../../Assets/marker.png"
import { useEffect, useRef } from "react"
import { Coords } from "../MyStory.types"
import { getMapToken } from "../../Helpers/getMapToken"

interface Props {
  currentCoords: Coords
}

const Map = ({ currentCoords }: Props) => {
  const { latitude, longitude } = currentCoords

  const mapRef = useRef<any>()

  useEffect(() => {
    if (mapRef) {
      mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 })
    }
  }, [latitude, longitude])

  return (
    <ReactMapGl
      ref={mapRef}
      initialViewState={{
        longitude,
        latitude,
        zoom: 14,
      }}
      mapboxAccessToken={getMapToken()}
      mapStyle="mapbox://styles/miwii123/cl7uwo312000z15qd0irzbxj3"
      style={{ width: "100%", height: "400px" }}
    >
      <Marker latitude={latitude} longitude={longitude}>
        <img className={styles.Marker} src={marker} alt={`marker on latitude ${latitude} and longitude ${longitude}`} />
      </Marker>
    </ReactMapGl>
  )
}

export default Map
