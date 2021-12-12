import React from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import homeHero from "../images/bayc-mutant-hero.jpg";
import ape1 from "../images/ape1.png";
import ape2 from "../images/ape2.png";
import ape3 from "../images/ape3.png";
import ape4 from "../images/ape4.png";

const Home = ({ toggle, isOpen }) => {
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <div className="h-screen flex justify-center items-center bg-green-400">
        <h1 className="text-9xl uppercase font-black">Home Page</h1>
      </div> */}
      <section className="bg-black ">
        <div className="inner mx-auto max-w-6xl px-4 sm:px-6">
          <img src={homeHero} alt="homeImage" className="homeImage" />
          <div class="grid grid-rows-2 md:grid-flow-col gap-4 homeSection2 ">
            <div class="row-span-2 col-span-2 ...">
              <div className="text-white">
                <h1>Welcom to startup</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  bibendum imperdiet blandit.
                </p>
              </div>
            </div>
            <div class="row-span-3 ... text-white">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <img src={ape1} alt="homeImage" />
                </div>
                <div>
                  <img src={ape2} alt="homeImage" />
                </div>
                <div>
                  <img src={ape3} alt="homeImage" />
                </div>

                <div>
                  <img src={ape4} alt="homeImage" />
                </div>
              </div>
            </div>
            <div class="col-span-2 ...">02</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
