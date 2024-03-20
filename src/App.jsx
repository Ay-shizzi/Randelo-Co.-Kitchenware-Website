import React, { useEffect } from "react";
import "./App.css";
import dailyDelo from "./images/daily-delo-img.jpg";
import deloBlender from "./images/delo-blender.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1500,
      easing: "linear",
      delay: 100,
    });
  }, []);
  return (
    <>
      {/************************* HERO SECTION START *************************/}

      <section className="hero bg-heroBg bg-cover bg-bottom">
        <div className="hero-wrapper relative z-10 h-[80vh] flex flex-col justify-between items-center p-12 text-white text-center">
          <nav className="logo ">
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="logo-name font-ralewayFont flex flex-col items-center text-xl font-bold leading-none"
            >
              Randelo Co.
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="text-sm font-normal"
              >
                kitchenware
              </span>
            </h1>
          </nav>
          <div className="hero-text flex flex-col items-center">
            <h1
              data-aos="zoom-in"
              data-aos-delay="500"
              className="hero-text-header font-frauncesFont italic text-clampHero"
            >
              The Delo Moka Pot
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="500"
              className="hero-text-paragraph text-sm md:text-lg"
            >
              Your home brew just got better.
            </p>
          </div>
          <div data-aos="fade-right" className="hero-btn">
            <button className="hero-btn-cta font-bold bg-white py-2 px-4 text-[#c8a287] tracking-wide hover:scale-105 hover:ease-in-out hover:duration-1000">
              Learn More
            </button>
          </div>
        </div>

        {/************************* HERO SECTION END *************************/}

        {/************************* BETTER BREWS START *************************/}
      </section>
      <section className="better-brews bg-cover flex flex-col justify-between items-top gap-8 px-8 py-12 pb-40 bg-[#fffbf5] md:flex md:flex-row">
        <div className="better-brews-header md:w-1/2  w-full">
          <h1
            data-aos="fade-down"
            className="font-frauncesFont text-clampHeader text-[#c8a287] "
          >
            Say goodbye to bland blends, and hello to
            <span className="italic"> better brews</span>.
          </h1>
        </div>
        <div className="better-brews-list flex flex-col gap-8 md:w-1/2 w-full">
          <div data-aos="fade-up" className="intense-flavor">
            <h3 className="font-bold text-[#4d3f28]">Intense flavor</h3>
            <p>
              The pressurized brewing technique enables the Delo to brew up to
              5x stronger coffee.
            </p>
          </div>
          <div data-aos="fade-up" className="less-bitter-taste">
            <h3 className="font-bold text-[#4d3f28]">Less bitter taste</h3>
            <p>
              The improved design distributes heat to create a less bitter, more
              flavorful experience.
            </p>
          </div>
          <div data-aos="fade-up" className="sustainable-choice">
            <h3 className="font-bold text-[#4d3f28]">The sustainable choice</h3>
            <p>
              The Delo is affordable, durable, low maintenance, and requires no
              electricity.
            </p>
          </div>
        </div>
      </section>

      {/************************* BETTER BREWS END *************************/}

      {/************************* DAILY DELO START *************************/}

      <section className="daily-delo md:grid md:grid-cols-2 md:grid-rows-1 grid grid-cols-1 grid-rows-2">
        <div className="daily-delo-header bg-dailyDeloBg bg-cover bg-center pt-20 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 col-start-1 col-end-2 row-start-1 row-end-2">
          <h1
            data-aos="fade-down"
            className="text-6xl font-robotoFont text-white text-center font-extrabold"
          >
            Daily Delo
          </h1>
        </div>
        <div className="daily-delo-content bg-[#cfb4ac] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 col-start-1 col-end-2 row-start-2 row-end-3">
          <div className="daily-delo-content-wrapper md:p-20 p-10 flex flex-col items-center text-center gap-4">
            <img
              data-aos="zoom-in"
              className="daily-delo-img w-52 h-80 object-cover object-[65%]"
              src={dailyDelo}
              alt="daily-delo img"
            />
            <p data-aos="fade-up">
              Life is better when you start your day with the right cup.
            </p>
          </div>
        </div>
      </section>

      {/************************* DAILY DELO END *************************/}

      {/************************* DELO DETAILS START *************************/}

      <section className="delo-details p-14">
        <div className="delo-details-header">
          <h1
            data-aos="fade-down"
            className="text-clampHeader font-robotoFont text-center font-extrabold text-[#c8a287]  mb-10"
          >
            The Delo in Detail
          </h1>
          <div className="blender-img flex justify-center">
            <img
              data-aos="zoom-in"
              className="blender max-h-[20rem] min-h-[10rem]"
              src={deloBlender}
              alt="Delo Blender img"
            />
          </div>
        </div>
      </section>

      {/************************* DELO DETAILS END *************************/}

      {/************************* CARD START *************************/}

      <section className="delo-subscriber-cards bg-[#c8a287] flex flex-col justify-between items-center px-8 py-12 gap-12">
        <div className="delo-cards-heading flex flex-col items-center gap-4 text-center">
          <h1
            data-aos="fade-down"
            className="delo-cards-header font-frauncesFont text-clampHeader text-white"
          >
            Made for You
          </h1>
          <p
            data-aos="fade-right"
            className="delo-card-paragraph text-[#4d3f28]"
          >
            Delo variants are made to fit your lifestyle
          </p>
        </div>
        <div className="delo-cards-wrapper md:flex md:flex-row md:w-full items-center justify-between flex flex-col gap-5">
          <div
            data-aos="fade-up"
            className="delo-card bg-[#fffbf5] flex flex-col items-center justify-between h-80 max-w-[20rem] min-w-[14rem] p-4"
          >
            <h1 className="card-header font-frauncesFont text-[#c8a287] text-4xl">
              The Delo
            </h1>
            <div className="delo-items flex flex-col gap-3 items-center">
              <p className="card-paragraph text-[#4d3f28]">Standard size</p>
              <hr className="w-56" />
              <p className="card-paragraph text-[#4d3f28]">Brass finish</p>
              <hr className="w-56" />
            </div>
            <button className="delo-btn p-2 w-full bg-[#c8a287] text-white">
              $90
            </button>
          </div>
          <div
            data-aos="fade-up"
            className="delo-card bg-[#fffbf5] flex flex-col items-center justify-between h-80 max-w-[20rem] min-w-[14rem] p-4"
          >
            <h1 className="card-header font-frauncesFont text-[#c8a287] text-4xl">
              Delo X
            </h1>
            <div className="delo-items flex flex-col gap-3 items-center">
              <p className="card-paragraph text-[#4d3f28]">Larger chambers</p>
              <hr className="w-56" />
              <p className="card-paragraph text-[#4d3f28]">Matte gold finish</p>
              <hr className="w-56" />
            </div>
            <button className="delo-btn p-2 w-full bg-[#c8a287] text-white">
              $110
            </button>
          </div>
          <div
            data-aos="fade-up"
            className="delo-card bg-[#fffbf5] flex flex-col items-center justify-between h-80 max-w-[20rem] min-w-[14rem] p-4"
          >
            <h1 className="card-header font-frauncesFont text-[#c8a287] text-4xl">
              Delo Delux
            </h1>
            <div className="delo-items flex flex-col gap-3 items-center">
              <p className="card-paragraph text-[#4d3f28]">Limited edition</p>
              <hr className="w-56" />
              <p className="card-paragraph text-[#4d3f28]">Platinum finish</p>
              <hr className="w-56" />
            </div>
            <button className="delo-btn p-2 w-full bg-[#c8a287] text-white">
              $150
            </button>
          </div>
        </div>
      </section>

      {/************************* CARD END *************************/}

      {/************************* TESTIMONIAL START *************************/}

      <section className="delo-testimonials px-8 py-28 bg-testimonialsBg relative bg-center bg-cover">
        <div className="delo-testimonials-wrapper relative z-10 flex flex-col text-white md:gap-20 gap-10">
          <h1
            data-aos="fade-down"
            className="delo-testimonials-header font-ralewayFont font-bold text-clampHeader"
          >
            Fans of Delo
          </h1>
          <div className="delo-testimonial-card-wrapper md:flex md:flex-row md:items-center md:justify-between gap-10 flex flex-col">
            <div
              data-aos="zoom-in-up"
              className="delo-testimonials-card flex flex-col gap-1"
            >
              <h3 className="delo-testimonials-name font-robotoFont text-2xl">
                James
              </h3>
              <p className="delo-testimonials-data font-bold">
                Coffee Aficionado
              </p>
              <p className="delo-testimonials-content mt-3">
                Testimonials are short quotes from people who love your brand.
                It's a great way to convince customers to try your services.
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              className="delo-testimonials-card flex flex-col gap-1"
            >
              <h3 className="delo-testimonials-name font-robotoFont text-2xl">
                Keera
              </h3>
              <p className="delo-testimonials-data font-bold">Coffee</p>
              <p className="delo-testimonials-content mt-3">
                Testimonials are short quotes from people who love your brand.
                It's a great way to convince customers to try your services.
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              className="delo-testimonials-card flex flex-col gap-1"
            >
              <h3 className="delo-testimonials-name font-robotoFont text-2xl">
                Peter
              </h3>
              <p className="delo-testimonials-data font-bold">Entrepreneur</p>
              <p className="delo-testimonials-content mt-3">
                Testimonials are short quotes from people who love your brand.
                It's a great way to convince customers to try your services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/************************* TESTIMONIAL END *************************/}

      {/************************* HOME MADE START *************************/}

      <section className="home-made bg-[#cfb4ac] md:grid md:grid-cols-2 md:grid-rows-1 grid grid-cols-1 grid-rows-2">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="home-made-text md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 col-start-1 col-end-2 row-start-2 row-end-3 px-10 py-20"
        >
          <div className="home-made-text-wrapper flex flex-col items-center justify-between h-[50vh]">
            <h1 className="home-made-header font-robotoFont font-black text-[#fffbf5] text-clampHeader text-center w-full">
              Home brews made better with Delo
            </h1>
            <button className="home-made-btn bg-[#fffbf5] text-[#c8a287] font-ralewayFont font-bold py-2 px-4">
              Get Yours
            </button>
          </div>
        </div>
        <div className="home-made-img bg-cover bg-center bg-homeMadeBg md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 col-start-1 col-end-2 row-start-1 row-end-2"></div>
      </section>

      {/************************* HOME MADE END *************************/}

      {/************************* CONTACT START *************************/}

      <section className="contact bg-[#fffbf5] md:grid md:grid-cols-2 md:grid-rows-1 grid grid-cols-1 grid-rows-2">
        <div className="contact-img bg-contactBg bg-cover bg-center md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 col-start-1 col-end-2 row-start-1 row-end-2"></div>
        <div className="contact-info md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 col-start-1 col-end-2 row-start-2 row-end-3 py-20 px-10 ">
          <div
            data-aos="zoom-in"
            className="contact-info-wrapper flex flex-col items-start justify-between h-[50vh]"
          >
            <div className="contact-us flex flex-col h-1/3 justify-between">
              <h1 className="contact-us-header font-robotoFont font-bold text-clampHeader text-[#c8a287]">
                Contact us
              </h1>
              <p>
                123 lawal Street. <br />
                Lawal City, ST 12345
                <br /> +234-567-8910
              </p>
              <p>hello@lawalemail.com</p>
            </div>
            <div className="contact-info-socials flex items-center gap-5">
              <FontAwesomeIcon
                className="bg-[#c8a287] text-white px-[10px] py-2 rounded-full cursor-pointer hover:scale-110 ease-in-out duration-300"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="bg-[#c8a287] text-white p-2 rounded-full cursor-pointer hover:scale-110 ease-in-out duration-300"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="bg-[#c8a287] text-white p-2 rounded-full cursor-pointer hover:scale-110 ease-in-out duration-300"
                icon={faXTwitter}
              />
            </div>
          </div>
        </div>
      </section>

      {/************************* CONTACT END *************************/}
    </>
  );
}

export default App;
