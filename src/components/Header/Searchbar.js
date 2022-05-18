import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
function Searchbar() {
  return (
    <div className="w-80 px-4 text-slate-100 flex bg-[#0F1B2F] h-10 rounded-xl items-center p-0 space-x-2">
      <BiSearchAlt2 className="text-2xl"/>
      <input
        className="bg-[#0F1B2F] text-slate-100  w-full rounded-lg h-full outline-0 px-1 placeholder:text-sm"
        type="text"
        name="search"
        placeholder="Search Items, Collections and Creators"
      />
    </div>
  );
}

export default Searchbar;
