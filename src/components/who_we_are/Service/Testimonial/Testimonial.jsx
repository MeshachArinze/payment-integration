import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring, animated } from "react-spring";
import { FaAward, FaFirstAid, FaTrophy } from "react-icons/fa";

const Testimonial = ({ images }) => {
  const [readMore, setReadMore] = useState(false);

  const name = [
    {
      id: 1,
      icon: <FaAward />,
      text: "Quality",
    },
    {
      id: 2,
      icon: <FaFirstAid />,
      text: "Experience",
    },
    {
      id: 13,
      icon: <FaTrophy />,
      text: "Team Work",
    },
  ];

  const info = "Provide your customers with the best payment experience from anywhere with different payment options in just a few clicks.Integrate with our payment gateway with easy and user-friendly documents and start collecting payments. Now onwards our paymentintegration services will simplify for you the process of paying collecting payments through a choice of multiple payment methods. We facilitate end-to-end solutions right from letting you choose the ideal service provider to the seamless integration of the services. A payment integration allows you to securely collect and make payments anytime, anywhere. Merchants can electronically accept payments directly from their website. It is a simple online version of a point of sale (POS) of a physical store. It allows you to accept payments through debit cards, wallets, cash-based vouchers etc."

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className="w-full">
        <div className="w-[90%] mx-auto flex flex-col h-auto md:h-full md:flex-row">
          <div className="flex flex-col md:w-[60%]">
            <h2>Wider Opportunities with Kikisha Tech Community</h2>
            <p className="text-justify  bg-gray-100 shadow-sm p-2">
              
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button className="text-lightOrange" onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "  read more"}
              </button>
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-6  md:w-[40%]">
            <div className="flex flex-col items-center ">
              {name.map(({ id, icon, text }) => (
                <div key={id} className="flex items-center space-x-9">
                  <span className="text-lightTorquise">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className=" w-full md:m-auto  md:w-[90%]">
              <Slider {...settings}>
                {images.map(({ id, img, alt }) => (
                  <div key={id}>
                    <img className="max-w-full m-auto" src={img} alt={alt} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
