import { Parallax } from "react-parallax"
import Map from "./Components/Map/Map"
import Image1 from "../../Assets/section1.jpeg"

import styles from "./MyStory.module.scss"
import { useEffect, useRef, useState } from "react"

interface Viewport {
  latitude: number
  longitude: number
}

interface FilterState {
  category: string
  yearFrom: string
  yearTo: string
}

enum Category {
  JOB = "job",
  VACATION = "vacation",
  EDUCATION = "education",
  MISC = "misc",
}

type CategoryType = Category

interface Story {
  title: string
  description: string
  date: string
  coords: { latitude: number; longitude: number }
  category: CategoryType
}

const stories: Story[] = [
  {
    title: "High school",
    description: "story1",
    coords: { latitude: 59.064413047893424, longitude: 15.109161182148588 },
    date: "2022-01-01",
    category: Category.EDUCATION,
  },
  {
    title: "University",
    description: "story2",
    coords: { latitude: 59.25483214264579, longitude: 15.24922102960418 },
    date: "2020-06-03",
    category: Category.EDUCATION,
  },
  {
    title: "Japan",
    description: "story3",
    coords: { latitude: 35.711932412809425, longitude: 139.7039841798522 },
    date: "2016-11-17",
    category: Category.EDUCATION,
  },
  {
    title: "Roppongi",
    description: "story4",
    coords: { latitude: 35.663642751996264, longitude: 139.73191896292886 },
    date: "2016-11-17",
    category: Category.JOB,
  },
  {
    title: "Stockholm",
    description: "story5",
    coords: { latitude: 59.330849049650084, longitude: 18.0663914111625 },
    date: "2016-11-17",
    category: Category.JOB,
  },
]

const MyStory = () => {
  const initialCoords = stories[0].coords
  const [viewport, setViewport] = useState<Viewport>({ latitude: initialCoords.latitude, longitude: initialCoords.longitude })
  const [currentStories, setCurrentStories] = useState<Story[]>(stories)
  const [filterState, setFilterState] = useState<Partial<FilterState>>()
  const timelineRef = useRef<HTMLUListElement>(null) // used solely to target and scroll to timeline when pressing "click here to get to know me"

  useEffect(() => {
    if (filterState) {
      setCurrentStories(stories.filter((story) => story.category === filterState.category))
    }
  }, [filterState])

  const generateYears = (startValue: number, increments: number) =>
    Array(increments)
      .fill("")
      .map((_, i) => <option value={startValue + i}>{startValue + i}</option>)

  return (
    <div className={styles.MyStory}>
      <Parallax blur={0} bgImage={Image1} className={styles.Start}>
        <h1>Welcome to my timeline!</h1>
        <button onClick={() => timelineRef && timelineRef.current && timelineRef.current.scrollIntoView({ behavior: "smooth" })}>
          Click here to get to know me
        </button>
      </Parallax>
      <div className={styles.Timeline}>
        <h2>My life in a time line</h2>
        <div className={styles.Filters}>
          <h3>Filters</h3>
          <div className={styles.FilterElements}>
            <select onChange={(event) => setFilterState({ category: event.target.value })}>
              <option disabled selected>
                Category
              </option>
              <option value={Category.JOB}>Job</option>
              <option value={Category.VACATION}>Vacation</option>
              <option value={Category.EDUCATION}>Education</option>
              <option value={Category.MISC}>Other</option>
            </select>
            <select onChange={(event) => setFilterState({ yearFrom: event.target.value })}>
              <option disabled selected>
                Date from
              </option>
              {generateYears(2010, 20)}
            </select>
          </div>
        </div>

        <ul ref={timelineRef}>
          {currentStories.map(({ title, description, coords, date }) => (
            <li key={title} onClick={() => setViewport(coords)}>
              <h3>{title}</h3>
              <i>{date}</i>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
      <Map viewport={{ setter: setViewport, getter: viewport }} />
    </div>
  )
}

export default MyStory
