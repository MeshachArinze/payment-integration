import React from 'react';
import phone from "../../../undraw/home-img.png"



const Pages = () => {
  return (
    <>
      <div className="h-auto bg-gradient-to-r from-lightBlack to-lightGreyp flex flex-col gap-8 items-center">
        <h1 className="text-center md:text-2xl text-lightWhite">
          Still not sure about us
        </h1>
        <p className="text-lightWhite px-8 text-lg">
          Let’s sit and talk. Get in touch with us today and get the best for
          your website to stand out.
        </p>
        <a
          className="bg-lightOrange mb-9 px-8 py-2 text-lg rounded-lg font-bold text-lightBlack flex item justify-self-end items-end"
          href="/contact"
        >
          contact
        </a>
      </div>
      <div className="bg-lightWhite h-auto flex flex-col  md:flex-row md:justify-between md:items-center md:px-8 md:py-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lightBlack md:text-2xl">
            Why Choose Us?
          </h2>
          <p className="text-lightBlack px-8 text-lg text-justify">
            The principle of kikisha tech community is to come up with
            first-class digital marketing services that enable you to flourish
            your business and to promote your company in the market. We wholly
            support you to make your business stand out from the crowd. The
            amount of dedication, hard work, and strategic analysis goes in
            evaluating the basics of a website.
          </p>
          <a
            className="bg-lightOrange  px-8 mb-8  text-center  mx-auto py-1 text-lg rounded-sm font-normal capitalize text-lightBlack "
            href="/about"
          >
            about
          </a>
        </div>
        <div>
          <img className="max-w-xs hidden md:block" src={phone} alt="phone" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-auto flex   md:justify-end">
        <div className="flex flex-col m-auto w-[500px] gap-8 mr-8">
          <h2 className="text-center text-lightWhite">Let's Talk?</h2>
          <p className="p-4 text-lightWhite font-semibold text-lg">
            Fill your form and let's discuss the strategies to make your project
            stand out from the circle.
          </p>
          <div className="flex flex-col  max-w-[100%] m-auto">
            <div className="w-full mb-4">
              <input
                type="text"
                className="w-[100%] py-3 px-4 rounded-sm border-none"
                placeholder="fullname"
                name="fullname"
                value=""
              />
            </div>
            <div className="flex flex-col md:flex md:flex-row md:space-x-8 md:justify-center md:items-center mb-4">
              <input
                type="email"
                className="mb-4 py-3 px-4 rounded-sm border-none  md:mb-0"
                placeholder="email"
                name="mail"
                value=""
              />
              <input
                type="number"
                name="number"
                className="py-3 px-4 rounded-sm border-none"
                placeholder="number"
                value=""
              />
            </div>
            <div className="w-full">
              <textarea
                
                cols="50"
                placeholder="message"
                rows="5"
                className="mx-auto w-[100%] px-4 py-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pages;