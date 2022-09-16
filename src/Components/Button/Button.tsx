import { HTMLProps } from "react"
import styles from "./Button.module.scss"

interface Props extends HTMLProps<HTMLButtonElement> {
  label: string
  testSelector?: string
  type?: "submit" | "reset" | "button" | undefined
}

const Button = ({ label, onClick, testSelector, type = "button", ...props }: Props) => {
  return (
    <button {...props} type="button" data-testid={testSelector} onClick={onClick} className={styles.Button}>
      {label}
    </button>
  )
}

export default Button
