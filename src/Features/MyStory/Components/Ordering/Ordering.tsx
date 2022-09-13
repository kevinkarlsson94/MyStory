import { Dispatch, SetStateAction } from "react"

import styles from "./Ordering.module.scss"

export interface OrderingState {
  orderByName: "asc" | "desc" | null
  orderByYear: "asc" | "desc" | null
}

interface Props {
  setOrderingState: Dispatch<SetStateAction<OrderingState>>
  orderingState: OrderingState
}

export const initialOrderState: OrderingState = { orderByName: null, orderByYear: null }

const Ordering = ({ setOrderingState, orderingState }: Props) => {
  const getOrderByNameLabel = () => (orderingState.orderByName === "asc" ? "ascending" : "descending" && "")
  const getOrderByNameState = () => {
    if (orderingState.orderByName === null) {
      return "asc"
    } else if (orderingState.orderByName === "asc") {
      return "desc"
    } else {
      return null
    }
  }

  return (
    <div className={styles.Ordering}>
      <button onClick={() => setOrderingState((os) => ({ ...os, orderByName: getOrderByNameState() }))}>
        Order by name {getOrderByNameLabel()}
      </button>
    </div>
  )
}

export default Ordering
