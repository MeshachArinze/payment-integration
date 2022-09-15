import React from "react";
import Typed from "react-typed";
import phoneImg from "../../../../images/phone.svg";

const Page = () => {
  return (
    <>
      <section>
        <div className=" h-auto md:flex md:flex-row p-6 md:mx-auto md:justify-center space-x-32">
          <div className=" space-y-8 text-center flex flex-col md:justify-center md:items-center  pb-6 bg-lightPurple">
            <h1 className=" text-3xl max-w-[100%] text-center md:text-justify text-lightOrange  mb-[2rem]">
              Payments Method and <br />
              <Typed
                className="text-lightOrange"
                strings={[" infrastructure", " Gateway", " Service"]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </h1>
            <p className="text-lightOrange max-w-md  text-justify mx-auto px-5">
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <a href="/payment" className=" bg-lightOrange mx-auto px-4 py-2">
              Start now
            </a>
          </div>
          <div className="flex md:items-center md:justify-end">
            <img
              src={phoneImg}
              className="max-w-xs m-auto hidden md:block"
              alt="phone"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
