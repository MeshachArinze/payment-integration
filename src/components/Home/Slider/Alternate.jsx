import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { icons } from "../../../Data";
import "./Alternate.css";

function App() {
  const [people, setPeople] = useState(icons);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  // useEffect(() => {
  //   const lastIndex = people.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section bg-lightBlack">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, text, title } = person;
          console.log(id, title);

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <>
              <article className={position} key={id}>
                <div>
                  <img src={text} alt={title} className="person-img" />
                  <div className="text-lightOrange">{title}</div>
                </div>
              </article>
            </>
          );
        })}
        <div className="flex flex-col">
          <button className="prev" onClick={prevSlide}>
            <FiChevronLeft size={40} />
          </button>
          <button className="next" onClick={nextSlide}>
            <FiChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
