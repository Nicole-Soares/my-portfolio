import { useEffect, useState } from "react";
import "./App.css";
import Portfolio from "./pages/portfolio/Portfolio";
import Loader from "./components/Loader/Loader";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

  return(
    <BrowserRouter>
      <Navbar onScrollToSection={scrollToSection} />
      <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
