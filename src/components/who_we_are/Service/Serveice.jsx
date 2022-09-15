import React, { useState, useEffect } from "react";
import Integration from "./Payment/Integration";
import Page from "./Page/Page";
import Testimonial from "./Testimonial/Testimonial";
import Client from "./Client/Client";
import Image1 from "../../../images/product-3.jpeg";
import Image2 from "../../../images/product-4.jpeg";
import Image3 from "../../../images/product-6.jpeg";
import ThreeDotsWave from "../../../Loading/ThreeDotsWave";

const Serveice = () => {
  const images = [
    {
      id: 1,
      img: Image1,
      alt: "imgage",
    },
    {
      id: 2,
      img: Image2,
      alt: "image",
    },
    {
      id: 3,
      img: Image3,
      alt: "image",
    },
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return (
      <main>
        <ThreeDotsWave />
      </main>
    );
  }
  return (
    <>
      <Page />
      <Integration />
      <Testimonial images={images} />
      <Client />
    </>
  );
};

export default Serveice;
