import React from "react";
import phoneImg from "../../../undraw/phone.svg";
import Typed from "react-typed";

const Page = () => {
  
  return (
    <section className=" " >
      <div className=" h-[100vh]">
        <article className=" space-y-8 text-center">
          <h1 className=" text-3xl max-w-[100%]  mb-[2rem]">
            Payments Method and <br />
            <Typed
              className="text-lightDark"
              strings={[" infrastructure", " Gateway", " Service"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </h1>
          <p className="">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className=" bg-lightOrange">Start now</button>
        </article>
        <article className="">
          <img src={phoneImg} className="" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Page;
