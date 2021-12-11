import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // <div className="bg-white h-screen flex flex-col justify-center items-center">
    //   <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
    //     StartUp
    //   </h1>
    //   <Link
    //     className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
    //     to="/home"
    //   >
    //     Enter
    //   </Link>
    // </div>
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1
                className="h1 lg:text-6xl text-5xl mb-4 font-red-hat-display font-extrabold text-white"
                data-aos="fade-down"
              >
                StartUp
              </h1>
              <p
                className="text-xl text-gray-600 dark:text-gray-400"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                bibendum imperdiet blandit. Etiam porta venenatis odio ac
                gravida.
              </p>
              {/* CTA form */}

              <form className="mt-8" data-aos="fade-down" data-aos-delay="300">
                <Link
                  className=" btn text-white hover:bg-teal-400  bg-yellow-500 py-3 px-10 hover:bg-yellow-300 transition duration-300 ease-in-out items-center animate-bounce"
                  to="/home"
                >
                  Get Started
                </Link>
                <div className="flex flex-col sm:flex-row justify-center max-w-sm mx-auto sm:max-w-md md:mx-0">
                  {/* <input
                    type="tel"
                    className="form-input w-full mb-2 sm:mb-0 sm:mr-2"
                    placeholder="Phone number"
                    aria-label="Phone number"
                  /> */}
                </div>
                {/* Success message */}
                {/* <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
              </form>
              <ul
                className="max-w-sm sm:max-w-md mx-auto md:max-w-none text-gray-600 dark:text-gray-400 mt-8 -mb-2"
                data-aos="fade-down"
                data-aos-delay="450"
              >
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat.</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-teal-400 mr-2 flex-shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Lorem ipsum is placeholder text commonly.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
