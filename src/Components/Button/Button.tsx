import { HTMLProps } from "react"
import styles from "./Button.module.scss"

interface Props extends HTMLProps<HTMLButtonElement> {
  label: string
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      {label}
    </button>
  )
}

export default Button
