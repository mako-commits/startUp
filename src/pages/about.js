import React from "react";
import Navbar from "../components/Navbar";
const About = ({ toggle }) => {
  return (
    <>
      <Navbar toggle={toggle} />
      <div className="h-screen flex justify-center items-center bg-yellow-300">
        <h1 className="text-9xl uppercase font-black">About Page</h1>
      </div>
    </>
  );
};

export default About;
