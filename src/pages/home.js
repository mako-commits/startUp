import React from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import homeHero from "../images/bayc-mutant-hero.jpg";
import ape1 from "../images/ape1.png";
import ape2 from "../images/ape2.png";
import ape3 from "../images/ape3.png";
import ape4 from "../images/ape4.png";
import mysteryApe from "../images/mystery-ape.gif";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import toilet from "../images/toilet.png";
import shirt from "../images/shirt.png";
import garga from "../images/garga.png";
import gordy from "../images/gordy.png";
import sass from "../images/sass.png";
import tomato from "../images/tomato.png";

const Home = ({ toggle, isOpen }) => {
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <section className="bg-black ">
        <div className="inner mx-auto max-w-6xl px-4 sm:px-6">
          <img src={homeHero} alt="homeImage" className="homeImage" />
          <div class="flex justify-between flex-col md:flex-row py-20">
            <div class="flex-initial md:w-3/5 w-full">
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
            <div class="row-span-3  flex-initial md:w-2/6 w-full text-white picture-grid pt-10 md:pt-0">
              <div class="grid grid-cols-2 gap-4">
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

          <div class="flex justify-between flex-col md:flex-row py-20">
            <div class="flex-initial md:w-3/5 w-full">
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
            <div class="flex-initial md:w-2/6 w-full text-white">
              <p className="sub-p">
                Loripsuem m dolor sit amet, consectetur adipiscing elit. Proin
                bibendum imperdiet blandit.
              </p>
            </div>
          </div>

          {/* */}
          <div id= "bap" className="cta text-black flex justify-evenly">
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

          {/* */}
          <div class="flex justify-between flex-col md:flex-row py-20">
            <div className="text-white flex-initial md:w-3/5 w-full">
              <h1 className="heading">THE SPECS</h1>
              <p className="py-5">
                THE SPECS Each Bored Ape is unique and programmatically
                generated from over 170 possible traits, including expression,
                headwear, clothing, and more. All apes are dope, but some are
                rarer than others.
              </p>
              <p className="py-5">
                The apes are stored as ERC-721 tokens on the Ethereum blockchain
                and hosted on IPFS. (See Record and Proof.) Purchasing an ape
                costs 0.08 ETH.
              </p>
              <p className="py-5">
                To access members-only areas such as THE BATHROOM, Apeholders
                will need to be signed into their Metamask Wallet.
              </p>
            </div>

            <div class="row-span-3 text-white picture-grid  flex-initial md:w-2/6 w-full">
              <img src={mysteryApe} alt="homeImage" />
            </div>
          </div>

          {/* */}
          <div className="pb-20">
            <div className="text-white">
              <h2 className="heading">WELCOME TO THE CLUB</h2>
              <p className="py-3">
                When you buy a Bored Ape, you’re not simply buying an avatar or
                a provably-rare piece of art. You are gaining membership access
                to a club whose benefits and offerings will increase over time.
                Your Bored Ape can serve as your digital identity, and open
                digital doors for you.
              </p>
            </div>

            {/** */}
            <div class="grid grid-cols-5 gap-5 text-white">
              <div className="flex flex-row md:flex-col">
                <img src={icon1} alt="icon" className="homeIcon" />
                <p className="sub-p">10,000 Provably-rare Bored Ape tokens</p>
              </div>

              <div className="flex flex-row md:flex-col justify-between">
                {" "}
                <img src={icon2} alt="icon" className="homeIcon" />
                <p className="sub-p">
                  Fair Launch, fair distribution: All apes cost 0.08 ETH
                </p>
              </div>

              <div className="flex flex-row md:flex-col">
                {" "}
                <img src={icon3} alt="icon" className="homeIcon" />
                <p className="sub-p">
                  Ownership and commercial usage rights given to the consumer
                  over their NFT
                </p>
              </div>

              <div className="flex flex-row md:flex-col">
                {" "}
                <img src={icon4} alt="icon" className="homeIcon" />
                <p className="sub-p">
                  The Bathroom: A member's-only graffiti board
                </p>
              </div>

              <div className="flex flex-row md:flex-col">
                {" "}
                <img src={icon5} alt="icon" className="homeIcon" />
                <p className="sub-p">
                  Gain additional benefits through roadmap activations
                </p>
              </div>
            </div>
          </div>
          {/** */}
          <div class="flex justify-between flex-col md:flex-row py-20">
            <div className="text-white flex-initial md:w-4/5 w-full">
              <h1 className="heading">THE BATHROOM</h1>
              <p className="py-5">
                The BAYC Bathroom will become operational once the presale
                period is over. It contains a canvas accessible only to wallets
                containing at least one ape. Like any good dive bar bathroom,
                this is the place to draw, scrawl, or write expletives.
              </p>
              <p className="py-5">
                Each ape-holder will be able to paint a pixel on the bathroom
                wall every fifteen minutes. Think of it as a collaborative art
                experiment for the cryptosphere. A members-only canvas for the
                discerning minds of crypto twitter.
              </p>
              <p className="py-5">
                We're pretty sure it's going to be full of dicks.
              </p>
            </div>

            <div class=" text-white picture-grid  flex-initial md:w-1/6 w-3/5 mx-auto">
              <img src={toilet} alt="homeImage" />
            </div>
          </div>

          {/**/}
          <div className="text-white">
            <h1 className="heading">ROADMAP ACTIVATIONS</h1>
            <p className=" flex-initial md:w-3/5">
              We’re in this for the long haul. We’ve set up some goalposts for
              ourselves. Once we hit a target sell through percentage, we will
              begin to work on realizing the stated goal.
            </p>
          </div>
          <div class="flex justify-between flex-col md:flex-row py-20">
            <div className="text-white flex-initial md:w-3/5 w-full">
              <div className="flex  py-1.5">
                <span className="pr-10 text-yellow-400">10%</span>
                <p className="sub-p-2 text-justify">We pay back our moms.</p>
              </div>
              <div className="flex py-1.5">
                <span className="pr-10 text-yellow-400">10%</span>
                <p className="sub-p-2 text-justify">
                  We release the Caged Apes. 5 Caged Apes (tokens held back from
                  the sale) are airdropped to random Apeholders.
                </p>
              </div>
              <div className="flex py-1.5">
                <span className="pr-10 text-yellow-400">10%</span>
                <p className="sub-p-2 text-justify">
                  BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to
                  Ape into Shitcoins To.
                </p>
              </div>
              <div className="flex py-1.5">
                <span className="pr-10 text-yellow-400">10%</span>
                <p className="sub-p-2 text-justify">
                  Member-Exclusive BAYC Merch Store gets unlocked, featuring
                  Limited Edition tees, hoodies, and other goodies.
                </p>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="pr-10 text-yellow-400">10%</span>
                <p className="sub-p-2 text-justify">
                  The clubhouse image becomes interactive and the Mysterious
                  Note becomes legible, beginning a treasure hunt. The first to
                  solve the mystery will be rewarded 5 ETH and a Bored Ape.
                </p>
              </div>
              <div className="flex py-1.5">
                <span className="pr-10 text-yellow-400">10%</span>
                <p className="sub-p-2 text-justify">
                  The Bored Ape liquidity pool is initiated.
                </p>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="pr-10 text-yellow-400">10%</span>
                <p className="sub-p-2 text-justify">
                  The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we
                  cook up new ways to ape with our friends.
                </p>
              </div>
            </div>
            <div class=" text-white picture-grid  flex-initial md:w-1/4 w-3/5 mx-auto">
              <img src={shirt} alt="homeImage" />
            </div>
          </div>
          {/** */}
          <div class="flex justify-between flex-col md:flex-row py-20">
            <div className="text-white flex-initial md:w-3/5 w-full">
              <h1 className="heading pb-5">COMMUNITY TOOLS</h1>
              <p>
                Here are some helpful tools created by the Bored Ape Yacht Club
                community. Please note that these are unofficial in nature.
                Every assignment of an ape's overall value or rarity is
                inherently subjective.
              </p>
            </div>
            <div class=" text-black flex flex-col md:w-1/4 w-3/5 mx-auto">
              <button className="bg-yellow py-4 my-4 rounded-md">
                NFTEXP.IO
              </button>
              <button className="text-black bg-yellow py-4 my-4 rounded-md">
                RARITY.TOOLS
              </button>
            </div>
          </div>
          {/** */}
          <div class="flex justify-between flex-col md:flex-row py-20">
            <div class="flex-initial md:w-3/5 w-full">
              <div className="text-white">
                <h1 className="heading mb-4">THE TEAM</h1>
                <p className="py-1.5">
                  BAYC was created by four friends who set out to make some dope
                  apes, test our skills, and try to build something
                  (ridiculous).
                </p>
                <p className="py-1.5">
                  <span className="text-yellow-400">GARGAMEL.</span> STARCRAFT
                  OBSESSED.EATS SMURFS.
                </p>
                <p className="py-1.5">
                  {" "}
                  <span className="text-yellow-400">GORDON GONER.</span>{" "}
                  REFORMED LEVERAGE ADDICT.
                </p>
                <p className="py-1.5">
                  {" "}
                  <span className="text-yellow-400">
                    {" "}
                    EMPEROR TOMATO KETCHUP.
                  </span>{" "}
                  SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
                </p>
                <p className="py-1.5">
                  <span className="text-yellow-400"> NO SASS.</span> HERE FOR
                  THE APES. NOT FOR THE SASS.
                </p>
              </div>
            </div>
            <div class="row-span-3  flex-initial md:w-2/6 w-full text-white picture-grid pt-10 md:pt-0">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <img src={garga} alt="homeImage" />
                </div>
                <div>
                  <img src={gordy} alt="homeImage" />
                </div>
                <div>
                  <img src={sass} alt="homeImage" />
                </div>

                <div>
                  <img src={tomato} alt="homeImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
