import React from 'react';
import about_png from "../../undraw/product-8.jpeg";
import second from "../../undraw/office.jpg";
import third from "../../undraw/product-7.jpeg"
import { useGlobalContext } from "../../context";
import { FaGreaterThan } from "react-icons/fa";


const About = () => {
    const {
      
      page: { page, links },
      
    } = useGlobalContext();
  return (
    <>
      <section className="h-[30rem] w-[100%] bg-navyBlue grid">
        <h2>{page}</h2>
        <div className='flex flex-col justify-center items-center h-[100%] '>
          <h1 className="text-lightWhite text-6xl -translate-y-16 uppercase md:text-2xl">About us</h1>
          <div>
            {links.map((link, index) => {
              const { url, label } = link;
              return (
                <div className="flex items-center justify-center space-x-6">
                  <a
                    key={index}
                    className="text-center text-lightOrange text-3xl"
                    href={url}
                  >
                    {label}
                  </a>
                  <div className="flex items-center translate-y-1 justify-center">
                    <span>
                      {<FaGreaterThan className=" text-lightBlack" size={14} />}
                    </span>
                    <span>
                      {<FaGreaterThan className=" text-lightBlack" size={14} />}
                    </span>
                  </div>
                  <span className="text-2xl text-lightWhite">About us</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <article className="about_flex">
          <div className="about__div-img">
            <img src={about_png} alt="secretary" />
          </div>
          <div className="about_page">
            <div className="about_body">
              <h4 className="about_head">About us </h4>
              <div className="line"></div>
            </div>
            <p className="about__p">
              Kikisha Tech Community is an annex of the organisation called
              kikisha tech. This community is designed to aid a foundational
              grip in the development of youths in their chosen tech field, to
              ensure the all-round development of our members in both technical
              and soft skills. we believe technology is the new gold and desire
              to equip the youths adolescent of this generation with gold.
            </p>
          </div>
        </article>

        <div>
          <article className="about_imp">
            <div className="about_detail">
              <div className="about_two_head">
                <h4>Our impact</h4>
                <div className="line_two"></div>
              </div>
              <p>So far</p>
              <div className="about_text">
                in less than two years since its founding the kikisha tech
                community has play a malor role in the transformation of youths
                , business owners and through the internet and physically in the
                gap between when a teenager / youth finishes their secondary ot
                tertiary education with nothing to do is a time that could breed
                unproductive, unsupervised kids with too much time to get into
                trouble, most especially the young adolecent with nothing to do,
                with these in mind we developed a learning scheme for youths who
                wants to start a career in tech or hoping to start a business
                either physically or internet based excel.
              </div>
            </div>
            <div className="about_sec_img">
              <img src={second} className="img" alt="second" />
            </div>
          </article>

          <article className="about_imp_1">
            <div className="about_detail_1">
              <div className="about_two_head_1">
                <h4>Our impact</h4>
                <div className="line_two_1"></div>
              </div>
              <p>So far</p>
              <div className="about_text_1">
                The empowerment program started online by equipping business
                with databased buiness methods, teaching them how to create a
                database application for their, and registrating thr business of
                the most responsive and interactive participant on google. After
                which the physical trainging was held in partnership with an NGO
                called clarion voice for the youth and a lot more, where
                graphics design and foundational programming were taught in the
                digital class with hand on practice for free
              </div>
            </div>
            <div className="about_sec_img_1">
              <img src={second} className="img_1" alt="second" />
            </div>
          </article>
        </div>

        <article className="about_three">
          <div>
            The empowerment program started online by equipping business with
            databased buiness methods, teaching them how to create a database
            application for their, and registrating thr business of the most
            responsive and interactive participant on google. After which the
            physical trainging was held in partnership with an NGO called
            clarion voice for the youth and a lot more, where graphics design
            and foundational programming were taught in the digital class with
            hand on practice for free
          </div>
          <div className="about_third">
            <img className="img_third" src={third} alt="" />
          </div>
        </article>
      </section>
    </>
  );
}

export default About;