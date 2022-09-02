import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div className="flex flex-col bg-lightGreyp md:flex-row h-[100vh] ">
        <div className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <h1 className="text-center text-lightGrey capitalize">
            Contact information
          </h1>
          <p className="max-w-sm text-lg uppercase p-4 mx-auto text-lightWhite font-semibold">
            do you want a one an one contact with us; feel free to book a call
            with us{" "}
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center ">
              <p className="text-lightWhite mr-8">{<FaPhone />}</p>
              <p className="text-lightWhite">09131083175</p>
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-lightWhite mr-8">{<FaMailBulk />}</p>
              <p className="text-lightWhite">meshachfresh@gmail.com</p>
            </div>
            <div className="flex flex-row">
              <a href=""></a>
              <a>meshachfresh@gmail.com</a>
            </div>
          </div>
        </div>
        <div className=''>
          <h3>send us a message</h3>
          <div className="flex">
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact