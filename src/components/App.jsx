import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let bgImage;

  switch (location.pathname) {
    case "/space-tourism-website/":
      if (windowWidth >= 1440) {
      bgImage = "bg-home-desktop";
      } else if (windowWidth >= 768) {
      bgImage = "bg-home-tablet";
      } else {
      bgImage = "bg-home-mobile";
      }
      break;
    case "/space-tourism-website/destination":
      if (windowWidth >= 1440) {
      bgImage = "bg-destination-desktop";
      } else if (windowWidth >= 768) {
      bgImage = "bg-destination-tablet";
      } else {
      bgImage = "bg-destination-mobile";
      }
      break;
    case "/space-tourism-website/crew":
      if (windowWidth >= 1440) {
      bgImage = "bg-crew-desktop";
      } else if (windowWidth >= 768) {
      bgImage = "bg-crew-tablet";
      } else {
      bgImage = "bg-crew-mobile";
      }
      break;
    case "/space-tourism-website/technology":
      if (windowWidth >= 1440) {
      bgImage = "bg-technology-desktop";
      } else if (windowWidth >= 768) {
      bgImage = "bg-technology-tablet";
      } else {
      bgImage = "bg-technology-mobile";
      }
      break;
    default:
      bgImage = "bg-home-mobile";
  }

  return (
    <div className="relative min-h-screen min-w-screen bg-tertiary">
      <div className={`fixed inset-0 ${bgImage} bg-fixed bg-no-repeat bg-cover z-0 opacity-75`}></div>
      <div className="relative min-h-screen min-w-screen">
        <Navbar windowWidth={windowWidth} />
        <div className="relative container px-6 pb-6 text-primary min-h-screen md:min-h-0 z-1 mx-auto md:px-10 lg:p-0">
          <main>
            <Routes>
              <Route path="/space-tourism-website/" element={<HomePage />} />
              <Route path="/space-tourism-website/destination" element={<DestinationPage />} />
              <Route path="/space-tourism-website/crew" element={<CrewPage />} />
              <Route path="/space-tourism-website/technology" element={<TechnologyPage windowWidth={windowWidth} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;