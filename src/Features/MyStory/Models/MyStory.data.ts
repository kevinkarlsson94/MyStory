import { Story } from "./MyStory.types"
import Dog from "../../../Assets/dog.jpg"
import Alleskolan from "../../../Assets/alleskolan.jpeg"
import University from "../../../Assets/orebroUniversitet.jpeg"
import Shibuya from "../../../Assets/shibuya.jpeg"
import UnivaPaycast from "../../../Assets/univaPaycast.png"
import Forefront from "../../../Assets/forefront.jpeg"
import PuertoRico from "../../../Assets/puertoRico.jpeg"
import Orebro from "../../../Assets/orebroCastle.png"

export const stories: Story[] = [
  {
    title: "High school",
    country: "Sweden",
    locationName: "Alléskolan",
    description:
      "Studied technical line with focus on computers. Here is where I first got in contact with web development taking a course in HTML and CSS. I knew at this point that Frontend was my call.",
    coords: { latitude: 59.064413047893424, longitude: 15.109161182148588 },
    date: "2022-01-01",
    image: Alleskolan,
  },
  {
    title: "University",
    country: "Sweden",
    locationName: "Örebro University",
    description:
      "For University I went to a system analys program. I had the chance to learn about database modeling, I studied .NET, Javascript, HTML, CSS and design.",
    coords: { latitude: 59.25483214264579, longitude: 15.24922102960418 },
    date: "2020-06-03",
    image: University,
  },
  {
    title: "Japanese studies",
    country: "Japan",
    locationName: "Shibuya Gaigo Gakuin",
    description:
      "Moved to Japan to fulfill my dream of experience life in Japan. I studied Japanese in Shibuya for 1.5 years and it was a great experience! I met many friends here and it was fun to share talk and experience with people from other cultures.",
    coords: { latitude: 35.711932412809425, longitude: 139.7039841798522 },
    date: "2016-11-17",
    image: Shibuya,
  },
  {
    title: "First job",
    country: "Japan",
    locationName: "Univa Paycast Roppongi",
    description:
      "After graduating I worked for a payment company called Univa Paycast for 1,5 years in Roppongi. Worked mainly with React, typescript and redux. Since it was my first job it was a very memorable time of my life and I learned a lot.",
    coords: { latitude: 35.663642751996264, longitude: 139.73191896292886 },
    date: "2016-11-17",
    image: UnivaPaycast,
  },
  {
    title: "Second job",
    country: "Sweden",
    locationName: "Forefront Consulting Stockholm",
    description:
      "Moved back to Sweden for some cold northern air! Been working in Stockholm at Forefront consulting. Dispatched at TRR developing services helping laid of employees. It is a job I really love since what I do makes a real impact on peoples life.",
    coords: { latitude: 59.330849049650084, longitude: 18.0663914111625 },
    date: "2016-11-17",
    image: Forefront,
  },
  {
    title: "Sun vacation",
    country: "Spain",
    locationName: "Puerto Rico",
    description:
      "Went to my first sun vacation with my girlfriend to Puerto Rico in Canaria islands. Unfortunately COVID broke out during our trip so we had to spend most of our time in the hotel. But hey, the food was awesome!",
    coords: { latitude: 27.78590217654845, longitude: -15.711089189546476 },
    date: "2020-02-01",
    image: PuertoRico,
  },
  {
    title: "Moved to Örebro",
    country: "Sweden",
    locationName: "Örebro",
    description:
      "First the first time in my life, I moved to my own place! It was a small apartment in the central part of a smaller city called Örebro.",
    coords: { latitude: 59.26828589694834, longitude: 15.204607282230812 },
    date: "2014-01-15",
    image: Orebro,
  },
  {
    title: "Voof woof!",
    country: "Sweden",
    locationName: "Vretstorp",
    description:
      "Bought my first dog! His name is Hazel and he is a mix between Cavalier King Charles and Mittlespitz. He likes to chill and eat dog bones all day long.",
    coords: { latitude: 59.007400476780695, longitude: 14.815350457409018 },
    date: "2019-05-25",
    image: Dog,
  },
]
