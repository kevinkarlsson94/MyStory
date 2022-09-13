import { Category } from "../Components/Filter/Filter"
import { Story } from "../Components/MyStory.types"

export const stories: Story[] = [
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
