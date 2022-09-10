import { ReactNode } from "react"

import styles from './AppContainer.module.scss'

interface Props {
    children: ReactNode | ReactNode[]
}

const AppContainer  = ({children}: Props) => {
  return (
    <div className={styles.AppContainer}>
      {children}
    </div>
  )
};

export default AppContainer;
