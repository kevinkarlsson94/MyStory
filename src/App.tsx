import { AppContainer } from "./Components"
import { AppHero } from "./Components/AppHero/AppHero"
import MyStory from "./Features/MyStory/MyStory"

const App = () => {
  return (
    <AppContainer>
      <AppHero title="My life in a time line" description="Click a life event to see more information." />
      <MyStory />
    </AppContainer>
  )
}

export default App
