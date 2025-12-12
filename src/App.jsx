import { useEffect, useState } from "react";
import "./App.css";
import Portfolio from "./pages/portfolio/Portfolio";
import Loader from "./components/Loader/Loader";
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Language from "./components/Language/Language";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //para que se vea el loader hasta que se cargue toda la barra
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    window.history.replaceState({}, "", "/");
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  //para que cuando clickean algo en el navbar,
  //como no hay diferentes paginas no hay navegacion,
  // entonces se desplaza  al section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("ERROR: No element with id =", id);
    }
  };

  return (
    <>
      <Navbar onScrollToSection={scrollToSection} />
      <Language />
      <Portfolio />
    </>
  );
}

export default App;
