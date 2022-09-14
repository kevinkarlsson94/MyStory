import { AppContainer, AppHero } from "./Components"
import MyStory from "./Features/MyStory/MyStory"
import { scrollToBottomOfPage } from "./Features/MyStory/MyStory.helpers"

const App = () => {
  return (
    <AppContainer>
      {/* <AppHero title="Welcome to my timeline!" buttonText="Click here to get to know me" onClick={scrollToBottomOfPage} /> */}
      <MyStory />
    </AppContainer>
  )
}

export default App
