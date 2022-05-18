import React from "react";
import { BsCheckLg } from "react-icons/bs";

function VerifyBadge({ className = "" }) {
  return (
    <div className={`rounded-full bg-red-500 inline-block p-1 ${className}`}>
      <BsCheckLg className="text-white relative text-[10px]" />
    </div>
  );
}

export default VerifyBadge;
