import { AppContainer, AppHero } from "./Components";
import MyStory from "./Features/MyStory/MyStory";

const App = () => {
  return (
    <AppContainer>
      {/* <AppHero title='Kevins story' description='Here is the story of my life' /> */}
      <MyStory />
    </AppContainer>
  );
};

export default App;
