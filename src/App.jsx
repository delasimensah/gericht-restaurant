import Sticky from "react-stickynode";
import {
  Header,
  AboutUs,
  SpecialMenu,
  Chef,
  Intro,
  Laurels,
  Gallery,
  FindUs,
  Footer,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <>
    <Sticky innerZ={1000}>
      <Navbar />
    </Sticky>

    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </>
);

export default App;
