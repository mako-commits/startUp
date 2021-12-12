import React from "react";
import { Link } from "react-router-dom";
import video from "../images/club-landing.mp4";
import landingHero from "../images/mayc-hero.jpg";
import landingLogo from "../images/bayc-logo.png";

const Hero = () => {
  return (
    <section className="bg-black heroSection">
      <div className="topNav">
        <ul className="flex mb-4 md:mb-0 justify-end pr-5">
          <li>
            <a
              className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
              href="#0"
              aria-label="Twitter"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
              </svg>
            </a>
          </li>
          <li className="ml-4">
            <a
              className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
              href="#0"
              aria-label="Github"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
            </a>
          </li>
          <li className="ml-4">
            <a
              className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
              href="#0"
              aria-label="Facebook"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
              </svg>
            </a>
          </li>
          <li className="ml-4">
            <a
              className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
              href="#0"
              aria-label="Instagram"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20.145" cy="11.892" r="1" />
                <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="heroSection">
        <img src={landingHero} alt="landingHero" className="heroImage" />
        {/* <video width="960" height="600" className="heroImage">
          <source src={video} type="video/mp4" />
        </video> */}

        <img src={landingLogo} alt="landingLogo" className="heroLogo" />
        {/* <h1 className="flex mb-4 md:mb-0 justify-center text-white heroLogo lg:text-5xl">
          startUp
        </h1> */}
        <div className="heroText">
          {/* Content */}
          <div className=" mb-8 md:mb-0 text-center md:text-left bg-black">
            <h5
              className="h1 lg:text-6xl text-3xl mb-4 font-red-hat-display font-extrabold text-white"
              data-aos="fade-down"
            >
              Welcome to StartUp
            </h5>
            <p
              className="text-xl text-gray-600 dark:text-gray-400"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              bibendum imperdiet blandit. Etiam porta venenatis odio ac gravida.
            </p>
            {/* CTA form */}

            <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
              <Link
                className=" btn text-white hover:bg-teal-400  bg-yellow-500 py-3 px-10 hover:bg-yellow-300 transition duration-300 ease-in-out items-center animate-bounce"
                to="/home"
              >
                Get Started
              </Link>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-2.5 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                bibendum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
