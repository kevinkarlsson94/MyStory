import { Dispatch, SetStateAction } from "react"
import Button from "../../../../Components/Button/Button"

import styles from "./Ordering.module.scss"

export interface OrderingState {
  orderByName: "asc" | "desc" | undefined
  orderByYear: "asc" | "desc" | undefined
}

interface Props {
  setOrderingState: Dispatch<SetStateAction<OrderingState>>
  orderingState: OrderingState
}

export const initialOrderState: OrderingState = { orderByName: undefined, orderByYear: undefined }

const Ordering = ({ setOrderingState, orderingState }: Props) => {
  const getOrderByNameLabel = <K extends keyof OrderingState>(prop: K) => {
    if (orderingState[prop] === undefined) {
      return ""
    }
    if (orderingState[prop] === "asc") {
      return "▲"
    }
    if (orderingState[prop] === "desc") {
      return "▼"
    }
  }

  const getOrderByNameState = <K extends keyof OrderingState>(prop: K) => {
    if (orderingState[prop] === undefined) {
      return "asc"
    }
    if (orderingState[prop] === "asc") {
      return "desc"
    }
    if (orderingState[prop] === "desc") {
      return "asc"
    }
  }

  const handleOrderByNameState = () => {
    setOrderingState({ orderByYear: undefined, orderByName: getOrderByNameState("orderByName") })
  }

  const hndleOrderByYearState = () => {
    setOrderingState({ orderByYear: getOrderByNameState("orderByYear"), orderByName: undefined })
  }

  return (
    <div className={styles.Ordering}>
      <Button onClick={handleOrderByNameState} label={`Order by name ${getOrderByNameLabel("orderByName")}`} />
      <Button onClick={hndleOrderByYearState} label={`Order by year ${getOrderByNameLabel("orderByYear")}`} />
    </div>
  )
}

export default Ordering
