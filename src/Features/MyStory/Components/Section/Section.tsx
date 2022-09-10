import styles from "./Section.module.scss";
import Map from "../../Components/Map/Map";
import { useState } from "react";

type PosType = "left" | "right";

interface Props {
  title: string;
  mapPosition?: PosType;
}

const Section = ({ title, mapPosition = "right" }: Props) => {
  const [viewport, setViewport] = useState({ latitude: 0, longitude: 0 });

  return (
    <div className={styles.Section}>
      {mapPosition === "left" && (
        <div>
          <Map viewport={{ setter: setViewport, getter: viewport }} />
        </div>
      )}
      <div className={styles.TextSection}>
        <h3>{title}</h3>
        <p>
          I was born in Örebro in Sweden. My family lived in a small town called Kumla and when I was 2 years old we moved to the forest
          where I spend most of my childhood.
        </p>
        <p>
          I spend most of my days here playing with sticks in the forest as very young, and later switched to playing with computers at an
          older age.
        </p>
      </div>
      {mapPosition === "right" && (
        <div>
          <Map viewport={{ setter: setViewport, getter: viewport }} />
        </div>
      )}
    </div>
  );
};

export default Section;
