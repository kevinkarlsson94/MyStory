import styles from "./AppHero.module.scss"

interface Props {
  title: string
  description: string
}

const AppHero = ({ title, description }: Props) => (
  <div className={styles.AppHero}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default AppHero
