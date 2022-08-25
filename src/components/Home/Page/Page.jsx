import React from "react";
import phoneImg from "../../../undraw/phone.svg";
import { useGlobalContext } from "../../../context";
import Typed from "react-typed";
import "./Page.css";

const Page = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero bg-navyBlue" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info space-y-8 text-center">
          <h1 className="text-lightOrange text-3xl max-w-[100%]  mb-[2rem]">
            Payments Method and <br />
            <Typed
              className="text-lightOrange"
              strings={[" infrastructure", " Gateway", " Service"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </h1>
          <p className="text-lightOrange">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn bg-lightOrange">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
      {/* <App /> */}
    </section>
  );
};

export default Page;
