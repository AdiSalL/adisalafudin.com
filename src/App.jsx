import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  FadeIn,
  ZoomIn,
} from "react-scroll-motion";
import Hero from "./Components/Home/Hero";
import BentoAbout from "./Components/About/BentoAbout";
import Form from "./Components/Contact/Form";

const FadeUp = batch(FadeIn());
const zoomScroll = batch(ZoomIn());

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={zoomScroll}>
          <Hero />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <BentoAbout />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <Form></Form>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
