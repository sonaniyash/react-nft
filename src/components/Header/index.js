import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

import Searchbar from "./Searchbar";
import logoImage from "../../assets/images/logo.png"

function Index() {
  return (
    // <---- Header ---->
    <nav className="flex justify-around items-center py-10">
      <div>
        <img
          src={logoImage}
          className="max-w-2xl object-contain"
        />
      </div>
      <Searchbar />
      <ul className="flex space-x-4 text-slate-100">
        <li>Homepage</li>
        <li>Discover</li>
        <li>Activity</li>
        <li>Information</li>
      </ul>
      <div className="flex space-x-4">
        <div className="rounded-full bg-slate-800 text-slate-100 p-2 cursor-pointer">
          <FaRegUser />
        </div>
        <div className="rounded-full bg-slate-800 text-slate-100 p-2 cursor-pointer">
          <FaWallet />
        </div>
      </div>
    </nav>
  );
}

export default Index;
