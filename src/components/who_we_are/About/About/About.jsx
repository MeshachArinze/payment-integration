import Slider from "react-touch-drag-slider";
import { background } from "../../../../data";
import phoneImg from "../../../../images/phone.svg";
import "./About.css";
import ReactTyped from "react-typed";
import { Title } from "../../../../data";

const Kiki = () => {
  return (
    <div className="mb=8 w-[100%]  ">
      <div className="flex md:flex  bg-lightOrange  w-[100%] md:max-w-full space-x-8 h-auto">
        <article className="flex flex-col p-[2rem] ">
          <h2 className="text-lightBlack font-semibold text-sm md:text-lg text-center ">
            Code Right with Kikisha tech community
          </h2>
          <p className="text-lightGrey text-sm font-normal text-justify ">
            Kikisha Tech Community is an annex of the organisation called
            kikisha tech. This community is designed to aid a foundational grip
            in the development of youths in their chosen tech field, to ensure
            the all-round development of our members in both technical and soft
            skills. we believe technology is the new gold and desire to equip
            the youths adolescent of this generation with gold.
          </p>
          <div className="flex">
            <span></span>
            <div>
              <h4 className="text-lg font-semibold">Quality</h4>
              <p className="text-lightGrey text-sm font-normal text-justify ">
                Everything we do commits a well trained, dedicated and motivated
                team.
              </p>
            </div>
          </div>

          <div className="flex">
            <span></span>
            <div>
              <h4 className="font-semibold">Innovation</h4>
              <p className="text-lightGrey text-sm font-normal text-justify ">
                Our experts are focused on results that make our client's site
                stand out from the crowd.
              </p>
            </div>
          </div>
        </article>
        <img
          className="hidden md:block   md:max-w-md"
          src="https://www.kodrite.com/wp-content/uploads/2020/12/Quality-Experience.png"
          alt="title"
        />
      </div>
    </div>
  );
}

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
      <div className="bg-lightWhite h-auto flex flex-col mt-4 mb-8 md:flex-row md:justify-between md:items-center md:px-8 md:py-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lightBlack  md:text-2xl">
            Why Choose Us?
          </h2>
          <p className="text-lightBlack px-8 text-md font-normal">
            The principle of kikisha tech community is to come up with
            first-class digital marketing services that enable you to flourish
            your business and to promote your company in the market. We wholly
            support you to make your business stand out from the crowd. The
            amount of dedication, hard work, and strategic analysis goes in
            evaluating the basics of a website.
          </p>
          <a
            className="bg-lightOrange   px-4  text-center  m-auto py-1 text-md capitalize rounded-sm  font-normal text-lightBlack "
            href="/about"
          >
            about
          </a>
        </div>
        <div>
          <img className="max-w-xs hidden md:block" src={phoneImg} alt="phone" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-auto  flex  md:justify-end">
        <div className="flex flex-col w-[500px] gap-8 mr-8">
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
            <div className="flex flex-col md:flex md:flex-row   md:justify-center md:items-center mb-4">
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
                className="py-3 px-4 rounded-sm border-none "
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


const About = () => {
  return (
    <>
      <div className="h-[400px]">
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
          {background.map(({ text, title, id }) => (
            <div
              className="about h-[100] bg-cover bg-no-repeat bg-left-top"
              key={id}
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className=" text-3xl max-w-[100%] text-justify text-lightOrange  mb-[2rem]">
                  {title}
                  <br />
                  <ReactTyped
                    className="text-lightOrange"
                    strings={[" infrastructure", " Gateway", " Service"]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                  />
                </h1>

                <a href="#" className="rounded-sm bg-lightOrange px-5 py-2">
                  {text}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <section>
        
        <Kiki />
        <div className="p-[4] flex flex-col h-full items-center md:flex-row md:flex-wrap gap-8 md:justify-center  md:m-auto">
          {Object.assign(
            Title.map((item) => {
              const { id, title, details } = item;
              console.log(id);
              return (
                <div
                  key={id}
                  className=" shadow-md bg-gray-100 transition hover:bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-wrap rounded-sm"
                >
                  <div className="w-[500px]">
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
            })
          )}
        </div>
        <Pages />
      </section>
    </>
  );
};

export default About;
