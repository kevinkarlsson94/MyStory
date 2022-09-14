import { Parallax } from "react-parallax"
import styles from "./AppHero.module.scss"
import Image1 from "../../Assets/hero.jpeg"

interface Props {
  title: string
  buttonText: string
  onClick: () => void
}

const AppHero = ({ title, buttonText, onClick }: Props) => {
  return (
    <Parallax bgImage={Image1} className={styles.Start}>
      <h1>{title}</h1>
      <button onClick={onClick}>{buttonText}</button>
    </Parallax>
  )
}

export default AppHero
