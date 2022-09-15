// import App from "./Loading/App";
import Homes from "./Homes/Homes";
import Pages from "./Pages/Pages";
import Services from "./Services/Services";
import App from "./Slider/Alternate";

import ThreeDotsWave from "../../Loading/ThreeDotsWave";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <main>
      <ThreeDotsWave />
    </main>
  }
  return (
    <>
      <Homes />
      <Services />
      <App />
      <Pages />
    </>
  );
};

export default Home;
