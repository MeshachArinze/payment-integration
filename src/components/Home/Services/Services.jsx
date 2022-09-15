import React, { useEffect, useState } from "react";
import { Title } from "../../../data";

const Services = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    setData(Title)
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className=" bg-gray-100 w-[100%] min-h-[100vh] leading-loose p-[2rem]">
        <div className="flex flex-col">
          <h2>Our Services</h2>
          <div className="block mb-9 md:inline-flex md:justify-between">
            <p className="text-lightGrey text-justify">
              Focused on results we seek to boost the level of our customers
            </p>
            <button className="px-8 py-2 whitespace-nowrap rounded-3xl text-lightOrange bg-lightPurple inline-flex md:px-6 ">
              <div>view All</div>
            </button>
          </div>
        </div>
        <div className="flex flex-col h-full items-center md:flex-row md:flex-wrap gap-8 md:justify-center  md:m-auto">
          {
            Object.assign(data.map((item) => {
              const {id, title, details} = item;
              console.log(id);
             return (
               <div
                 key={id}
                 className=" shadow-md bg-gray-100 transition hover:bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-wrap rounded-sm"
               >
                 <div className="w-[400px]">
                   {" "}
                   <h4 className="mb-4 text-center text-xl text-lightOrange md:text-lg">
                     {title}
                   </h4>
                   <p className="mb-8 px-8 text-center text-lightGreyp text-md leading-8 md:text-sm">
                     {details}
                   </p>
                   <div className="mx-auto text-justify cursor-pointer w-[5rem] h-[2rem] flex items-center bg-lightWhite hover:bg-lightWhite justify-center rounded-full border-lightTorquise border-solid border-2 mb-8">
                     <button className="text-justify">press</button>
                   </div>
                 </div>
               </div>
             );
            }))
          }
        </div>
      </div>
    </>
  );
};

export default Services;
