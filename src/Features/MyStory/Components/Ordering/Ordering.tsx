import { Dispatch, SetStateAction } from "react"

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
      <button onClick={handleOrderByNameState}>Order by name {getOrderByNameLabel("orderByName")}</button>
      <button onClick={hndleOrderByYearState}>Order by year {getOrderByNameLabel("orderByYear")}</button>
    </div>
  )
}

export default Ordering
