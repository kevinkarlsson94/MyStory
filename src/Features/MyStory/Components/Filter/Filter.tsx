import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { generateYearsOption } from "../../MyStory.helpers"
import styles from "./Filter.module.scss"

export const initialFilterState: FilterState = { year: "", category: null }

interface Props {
  setFilterState: Dispatch<SetStateAction<FilterState>>
  filterState: FilterState
}

export interface FilterState {
  category: Category | null
  year: string
}

export enum Category {
  JOB = "job",
  VACATION = "vacation",
  EDUCATION = "education",
  MISC = "misc",
}

export type CategoryType = Category

const Filter = ({ setFilterState, filterState }: Props) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterState((fs) => ({ ...fs, category: event.target.value as CategoryType }))
  }

  const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => setFilterState((fs) => ({ ...fs, year: event.target.value }))

  const selectItemIsSelected = (category: Category, filterState: FilterState) => filterState.category === category

  return (
    <div className={styles.Filter}>
      <h3>Filters</h3>
      <div className={styles.FilterElements}>
        <select onChange={handleCategoryChange}>
          <option disabled selected>
            Category
          </option>
          <option selected={selectItemIsSelected(Category.JOB, filterState)} value={Category.JOB}>
            Job
          </option>
          <option value={Category.VACATION}>Vacation</option>
          <option value={Category.EDUCATION}>Education</option>
          <option value={Category.MISC}>Other</option>
        </select>
        <select onChange={handleYearChange}>
          <option disabled selected>
            Date from
          </option>
          {generateYearsOption(2010, 20)}
        </select>
        <button onClick={() => setFilterState(initialFilterState)}>Clear filters</button>
      </div>
    </div>
  )
}

export default Filter
