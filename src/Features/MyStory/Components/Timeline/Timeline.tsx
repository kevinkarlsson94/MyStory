import { ReactElement } from "react"
import styles from "./Timeline.module.scss"

interface Props {
  children: ReactElement[]
}

const Timeline = ({ children }: Props) => <div className={styles.Timeline}>{children}</div>

export default Timeline
