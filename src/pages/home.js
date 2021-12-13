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
          {/* <div className="flex max-w-6xl mx-auto py-11 section3">
            <div className="text-white">
              <h1 className="heading">
                WELCOME TO THE <br />
                BORED APE YACHT CLUB
              </h1>
              <p>
                Loripsuem m dolor sit amet, consectetur adipiscing elit. Proin
                bibendum imperdiet blandit.consectetur adipiscing elit. Proin
                bibendum imperdiet blandit.consectetur adipiscing elit. Proin
                bibendum imperdiet blandit.
              </p>
            </div>
            <div className="md:grid-flow-col">
              <div class="grid grid-cols-2 gap-7 picture-grid">
                <div>
                  <img src={ape1} alt="homeImage" className="gridImage" />
                </div>
                <div>
                  <img src={ape2} alt="homeImage" className="gridImage" />
                </div>
                <div>
                  <img src={ape3} alt="homeImage" className="gridImage" />
                </div>

                <div>
                  <img src={ape4} alt="homeImage" className="gridImage" />
                </div>
              </div>
            </div>
          </div> */}

          <div class="grid grid-rows-3 grid-rows-3 grid-flow-col gap-4 homeSection2">
            <div class="row-span-1 col-span-2">
              <div className="text-white">
                <h1 className="heading">
                  WELCOME TO THE <br />
                  BORED APE YACHT CLUB
                </h1>
                <p>
                  Loripsuem m dolor sit amet, consectetur adipiscing elit. Proin
                  bibendum imperdiet blandit.consectetur adipiscing elit. Proin
                  bibendum imperdiet blandit.consectetur adipiscing elit. Proin
                  bibendum imperdiet blandit.
                </p>
              </div>
            </div>
            <div class="row-span-3 text-white picture-grid">
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
          </div>

          {/* */}

          <div class="grid grid-rows-1 md:grid-flow-col gap-4 homeSection2">
            <div class="row-span-2 col-span-2 ...">
              <div className="text-white">
                <h4 className="mb-5 mr-9">
                  FAIR DISTRIBUTION <br /> (BONDING CURVES ARE A PONZI)
                </h4>
                <p>
                  Loripsuem m dolor sit amet, consectetur adipiscing elit. Proin
                  bibendum imperdiet blandit
                </p>
              </div>
            </div>
            <div class="row-auto text-white">
              <p>
                Loripsuem m dolor sit amet, consectetur adipiscing elit. Proin
                bibendum imperdiet blandit.
              </p>
            </div>
          </div>

          {/* */}
          <div className="cta text-black flex justify-evenly">
            <div>
              <h1 className="heading">BUY AN APE</h1>
            </div>
            <div>
              <p>
                {" "}
                The initial sale has sold out. To get your
                <br /> Bored Ape, check out the collection on <br />
                OpenSea.
              </p>
            </div>
            <div>
              <button className="cta-btn bg-black text-yellow-400 py-4 px-4 rounded-md">
                BUY AN APE ON <br />
                OPENSEA
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
