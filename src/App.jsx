import { useEffect, useState } from "react";
import "./App.css";
import Portfolio from "./pages/portfolio/Portfolio";
import Loader from "./components/Loader/Loader";

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

  return <Portfolio />;
}

export default App;
