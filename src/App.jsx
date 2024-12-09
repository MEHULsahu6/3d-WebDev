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
} from "./components";
import Dock from "./dock";

const App = () => {
  return (
    <BrowserRouter>
      {/* Main Container */}
      <div className="relative z-0 bg-primary" >
        {/* Background Stars */}
        {/* <StarsCanvas /> */}

        {/* Foreground Content */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Dock />
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
