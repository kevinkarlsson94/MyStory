import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { removeDuplicatesFromArray } from "../../MyStory.helpers"
import { Story } from "../MyStory.types"
import styles from "./Filter.module.scss"

export const initialFilterState: FilterState = { year: undefined, category: undefined }

interface Props {
  setFilterState: Dispatch<SetStateAction<FilterState>>
  filterState: FilterState
  stories: Story[]
}

export interface FilterState {
  category: Category | undefined
  year: string | undefined
}

export enum Category {
  JOB = "job",
  VACATION = "vacation",
  EDUCATION = "education",
  MISC = "misc",
}

export type CategoryType = Category

const Filter = ({ setFilterState, filterState, stories }: Props) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterState((fs) => ({ ...fs, category: event.target.value as CategoryType }))
  }

  const getExistingYearsInStoryList = (stories: Story[]): number[] =>
    removeDuplicatesFromArray(stories.map((story) => new Date(story.date).getFullYear())) as number[]

  const generateYearsOptions = (existingYearsInStoryList: number[]) =>
    existingYearsInStoryList.map((year) => <option value={Number(year)}>{String(year)}</option>)

  const existingYearsInStoryList = getExistingYearsInStoryList(stories)

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
          <option selected={selectItemIsSelected(Category.VACATION, filterState)} value={Category.VACATION}>
            Vacation
          </option>
          <option selected={selectItemIsSelected(Category.EDUCATION, filterState)} value={Category.EDUCATION}>
            Education
          </option>
          <option selected={selectItemIsSelected(Category.MISC, filterState)} value={Category.MISC}>
            Other
          </option>
        </select>
        <select onChange={handleYearChange}>
          <option disabled selected>
            Date from
          </option>
          {generateYearsOptions(existingYearsInStoryList)}
        </select>
        <button onClick={() => setFilterState(initialFilterState)}>Clear filters</button>
      </div>
    </div>
  )
}

export default Filter
