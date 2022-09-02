import React from "react";
import { FaArrowRight, FaMoneyCheck, FaSquare } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[100%] min-h-[100vh] leading-loose p-[2rem]">
        <div className="flex flex-col">
          <h2>Our Services</h2>
          <div className="block mb-9 md:inline-flex md:justify-between">
            <p className="text-lightGrey">
              Focused on results we seek to boost the level of our customers
            </p>
            <button className="px-8 py-2 whitespace-nowrap rounded-3xl text-lightOrange bg-lightPurple inline-flex md:px-6 ">
              <div>view All</div>
            </button>
          </div>
        </div>
        <div className="flex flex-col h-full items-center md:flex-row md:flex-wrap gap-8 md:justify-center  md:m-auto">
          <div className=" max-w-[20rem] flex flex-col   bg-lightGrey hover:bg-gradient-to-r from-sky-500 to-indigo-500">
            <p className="text-center mb-4 mx-auto text-lg text-lightTorquise">
              {<FaMoneyCheck size={40} />}
            </p>
            <h4 className="mb-4 text-center text-xl text-lightOrange md:text-2xl">
              Payment integration
            </h4>
            <p className="mb-8 px-8 text-center text-lightTorquise text-md leading-8 md:text-lg">
              online or offline business payment! We have a solution for all
              your payment requirement Provide your customers with the best
              payment
            </p>
            <div className="mx-auto cursor-pointer w-[2rem] h-[2rem] flex items-center justify-center rounded-full border-lightTorquise border-solid border-2 mb-8">
              <span>{<FaArrowRight className="text-lightOrange" />}</span>
            </div>
          </div>
          <div className=" max-w-[20rem] flex flex-col hover:bg-gradient-to-r from-lightPurple to-navyBlue hover:transition-all bg-lightGrey">
            <p className="text-center mb-4 mx-auto text-lg text-lightTorquise">
              {<FaMoneyCheck size={40} />}
            </p>
            <h4 className="mb-4 text-center text-xl text-lightOrange md:text-2xl">
              Payment integration
            </h4>
            <p className="mb-8 px-8 text-center text-lightTorquise text-md leading-8 md:text-lg">
              online or offline business payment! We have a solution for all
              your payment requirement Provide your customers with the best
              payment
            </p>
            <div className="mx-auto cursor-pointer w-[2rem] h-[2rem] flex items-center justify-center rounded-full border-lightTorquise border-solid border-2 mb-8">
              <span>{<FaArrowRight className="text-lightOrange" />}</span>
            </div>
          </div>
          <div className=" max-w-[20rem] flex flex-col hover:bg-gradient-to-r from-purple-500 to-pink-500  bg-lightGrey">
            <p className="text-center mb-4 mx-auto text-lg text-lightTorquise">
              {<FaMoneyCheck size={40} />}
            </p>
            <h4 className="mb-4 text-center text-xl text-lightOrange md:text-2xl">
              Payment integration
            </h4>
            <p className="mb-8 px-8 text-center text-lightTorquise text-md leading-8 md:text-lg">
              online or offline business payment! We have a solution for all
              your payment requirement Provide your customers with the best
              payment
            </p>
            <div className="mx-auto cursor-pointer w-[2rem] h-[2rem] flex items-center justify-center rounded-full border-lightTorquise border-solid border-2 mb-8">
              <span>{<FaArrowRight className="text-lightOrange" />}</span>
            </div>
          </div>
          <div className=" max-w-[20rem] flex flex-col hover:bg-gradient-to-r from-lightTorquise to-lightPurple hover:text-navyBlue  bg-lightGrey">
            <p className="text-center mb-4 mx-auto text-lg text-lightTorquise">
              {<FaMoneyCheck size={40} />}
            </p>
            <h4 className="mb-4 text-center text-xl text-lightOrange md:text-2xl">
              Payment integration
            </h4>
            <p className="mb-8 px-8 text-center text-lightTorquise text-md leading-8 md:text-lg">
              online or offline business payment! We have a solution for all
              your payment requirement Provide your customers with the best
              payment
            </p>
            <div className="mx-auto cursor-pointer w-[2rem] h-[2rem] flex items-center justify-center rounded-full border-lightTorquise border-solid border-2 mb-8">
              <span>{<FaArrowRight className="text-lightOrange" />}</span>
            </div>
          </div>
          <div className=" max-w-[20rem] flex flex-col  hover:bg-gradient-to-r from-lightPurple to-navyBlue bg-lightGrey">
            <p className="text-center mb-4 mx-auto text-lg text-lightTorquise">
              {<FaMoneyCheck size={40} />}
            </p>
            <h4 className="mb-4 text-center text-xl text-lightOrange md:text-2xl">
              Payment integration
            </h4>
            <p className="mb-8 px-8 text-center text-lightTorquise text-md leading-8 md:text-lg">
              online or offline business payment! We have a solution for all
              your payment requirement Provide your customers with the best
              payment
            </p>
            <div className="mx-auto cursor-pointer w-[2rem] h-[2rem] flex items-center justify-center rounded-full border-lightTorquise border-solid border-2 mb-8">
              <span>{<FaArrowRight className="text-lightOrange" />}</span>
            </div>
          </div>
          <div className=" max-w-[20rem] flex flex-col hover:bg-gradient-to-r from-sky-500 to-indigo-500  bg-lightGrey">
            <p className="text-center mb-4 mx-auto text-lg text-lightTorquise">
              {<FaMoneyCheck size={40} />}
            </p>
            <h4 className="mb-4 text-center text-xl text-lightOrange md:text-2xl">
              Payment integration
            </h4>
            <p className="mb-8 px-8 text-center text-lightTorquise text-md leading-8 md:text-lg">
              online or offline business payment! We have a solution for all
              your payment requirement Provide your customers with the best
              payment
            </p>
            <div className="mx-auto cursor-pointer w-[2rem] h-[2rem] flex items-center justify-center rounded-full border-lightTorquise border-solid border-2 mb-8">
              <span>{<FaArrowRight className="text-lightOrange" />}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
