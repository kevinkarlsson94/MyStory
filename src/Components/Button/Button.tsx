import { HTMLProps } from "react"
import styles from "./Button.module.scss"

interface Props extends HTMLProps<HTMLButtonElement> {
  label: string
  testSelector?: string
}

const Button = ({ label, onClick, testSelector }: Props) => {
  return (
    <button data-testid={testSelector} onClick={onClick} className={styles.Button}>
      {label}
    </button>
  )
}

export default Button
