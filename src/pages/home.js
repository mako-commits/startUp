import React from "react";
import Navbar from "../components/Navbar";

const Home = ({ toggle }) => {
  return (
    <>
      <Navbar toggle={toggle} />
      <div className="h-screen flex justify-center items-center bg-green-400">
        <h1 className="text-9xl uppercase font-black">Home Page</h1>
      </div>
    </>
  );
};

export default Home;
