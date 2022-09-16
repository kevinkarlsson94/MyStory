import { Dispatch, SetStateAction } from "react"
import Button from "../../../../Components/Button/Button"
import { OrderingState } from "../../Models/MyStory.types"

import styles from "./Ordering.module.scss"

interface Props {
  setOrderingState: Dispatch<SetStateAction<OrderingState>>
  orderingState: OrderingState
}

export const initialOrderState: OrderingState = { orderByName: undefined, orderByYear: undefined }

const Ordering = ({ setOrderingState, orderingState }: Props) => {
  const getOrderByNameLabel = <K extends keyof OrderingState>(prop: K) =>
    orderingState[prop] === "asc" ? "▲" : orderingState[prop] === "desc" ? "▼" : ""

  const getOrderByNameState = <K extends keyof OrderingState>(prop: K) =>
    orderingState[prop] === "asc" ? "desc" : orderingState[prop] === "desc" ? "asc" : "asc"

  const handleOrderByNameState = () => {
    setOrderingState({ orderByYear: undefined, orderByName: getOrderByNameState("orderByName") })
  }

  const handleOrderByYearState = () => {
    setOrderingState({ orderByYear: getOrderByNameState("orderByYear"), orderByName: undefined })
  }

  return (
    <div className={styles.Ordering}>
      <Button
        testSelector="order-by-name-button"
        onClick={handleOrderByNameState}
        label={`Order by name ${getOrderByNameLabel("orderByName")}`}
      />
      <Button
        testSelector="order-by-date-button"
        onClick={handleOrderByYearState}
        label={`Order by year ${getOrderByNameLabel("orderByYear")}`}
      />
    </div>
  )
}

export default Ordering
