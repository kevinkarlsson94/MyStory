import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import styles from "./Map.module.scss";
import marker from "../../../../Assets/marker.png";

interface Props {
  viewport: {
    setter: React.Dispatch<
      React.SetStateAction<{
        latitude: number;
        longitude: number;
      }>
    >;
    getter: {
      latitude: number;
      longitude: number;
    };
  };
}

const Map = ({ viewport }: Props) => {
  const {
    getter: { latitude, longitude },
    setter,
  } = viewport;

  const getMapToken = () => process.env.REACT_APP_MAP_TOKEN;

  return (
    <ReactMapGl
      {...viewport}
      initialViewState={{
        longitude,
        latitude,
        zoom: 14,
      }}
      latitude={latitude}
      longitude={longitude}
      mapboxAccessToken={getMapToken()}
      mapStyle="mapbox://styles/miwii123/cl7uwo312000z15qd0irzbxj3"
      style={{ width: "100%", height: "300px" }}
    >
      <Marker latitude={latitude} longitude={longitude}>
        <img className={styles.Marker} src={marker} alt={`marker on latitude ${latitude} and longitude ${longitude}`} />
      </Marker>
    </ReactMapGl>
  );
};

export default Map;
