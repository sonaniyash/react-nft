import React from "react";
import vectorImage from "../assets/images/hero-vector.png";

import Collections from "../components/Collections";
import NFTSection from "../components/NFTSection";
import Header from "../components/Header";

function Home() {
  return (
    <div className="container">
      {/* Hero Section  */}
      <div className="container h-[100vh] background-radial px-10">
        <Header />
        <div className="flex ml-10 justify-around items-center h-[70vh]">
          <div className="">
            <h1 className="text-4xl font-bold text-slate-100">
              Discover,collect and sell Hedera NFTs
            </h1>
            <p className="my-4 text-title-blue font-semibold">
              on HashGuild, the marketplace for Hedera NFTs
            </p>
            <div className="flex space-x-10">
              <button className="bg-primary-red rounded-sm px-10 py-2  text-white">
                Discover
              </button>
              <button className="bg-[#10213A] rounded-sm px-10 py-2 text-white">
                Create
              </button>
            </div>
          </div>
          <img className="max-w-lg" src={vectorImage} alt="Vector Image" />
        </div>
      </div>

      <Collections title={"Popular Collections"} />
      <NFTSection title={"Last Added Items"} />
      <NFTSection title={"New Drops Launching"} />
    </div>
  );
}

export default Home;
