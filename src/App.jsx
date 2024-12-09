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
import { useState, useEffect } from "react";
import Slider from "./Slider";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading time
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust to your needs
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
<div className={`app-container ${loading ? "overflow-hidden" : ""}`}>
{loading && (
<div
  className="preloader fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50"
  aria-live="polite"
>            <div className="preloader-content">
              {/* Glowing Circle Animation */}
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>

              {/* Loading Text */}
              <p className="loading-text mt-6 text-lg font-bold text-white">
                Preparing your adventure...
              </p>
            </div>
          </div>
        )}
        {!loading && (
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10">
            <StarsCanvas />
              <Navbar />
              <Hero />
            </div>
            <About />
            <Slider/>
            <Experience />
            <Tech />
            <Dock />
            <Works />
            <Feedbacks />
            <div className="relative z-10">
              <Contact />
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;