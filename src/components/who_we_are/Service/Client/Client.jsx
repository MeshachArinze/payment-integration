import React from 'react';
import Slider from "react-touch-drag-slider";
import "./Client.css";

const Client = () => {
    const client = [
        {
            id: 1,
            quote: "Nodejs, stripe programmer is highly recommended"
        },
        {
            id: 2,
            quote: "Thank you. Am pleased to take this courses. I will recommend you to any company"
        },
        {
            id: 3,
            quote: "Great for integrating stripe to my website. I will like to work with you again"
        },
        {
            id: 4,
            quote: "It a pleasure working with kikisha tech. He has an experience with stripe api and integratuon with word press"
        },
        {
            id: 5,
            quote: "About a genius. Was able to pinpoint the issue and have it work in no time"
        },
        
    ]
  return (
    <>
      <div className="bg-lightGrey h-[300px]">
        <Slider
          onSlideComplete={(i) => {
            console.log("finished dragging, current slide is", i);
          }}
          onSlideStart={(i) => {
            console.log("started dragging on slide", i);
          }}
          activeIndex={0}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {client.map(({ quote, id }) => (
            <div key={id} className="my-auto">
              <p className="bg-lightPurple w-[300px] h-[200px]">{quote}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Client;