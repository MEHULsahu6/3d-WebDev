import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Slider,
} from "./components";
import Slideshow from "./components/ImageSlider";
import Slidernew from "./components/ImageSlider";
import AnimatedSVG from "./components/AnimatedSVG";
import AnimatedLogo from "./components/AnimatedSVG";
import Preloader from "./components/AnimatedSVG";

const App = () => {
  return (
    <BrowserRouter>
    
      {/* Main Container */}
      
      <div className="relative z-0 bg-primary">
        {/* Background Stars */}
        {/* <StarsCanvas /> */}

        {/* Foreground Content */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10">
          <Navbar />
          
          <Slidernew />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
