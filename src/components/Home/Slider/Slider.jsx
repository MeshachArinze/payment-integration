import React, { useState } from "react";
import { icons } from "../../../Data";
import "./slider.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Slider = () => {
  const [index, setIndex] = useState(0);
  const { text,  } = icons[index];
  const checkNumber = (number) => {
    if (number > icons.length - 1) {
      return 0;
    }
    if (number < 0) {
      return icons.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * icons.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review bg-lightWhite">

      <div className="img-container">
        <h2 className="quote-icon">
          our
        </h2>
      </div>
      <img className="author w-[5rem]" src={text} alt="" />
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>

        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>

        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Slider;
