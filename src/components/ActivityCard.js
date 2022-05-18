import React from "react";
import profileImage from "../assets/images/collection-profile.png";
import VerifyBadge from "./VerifyBadge";
import HederaImage from "../assets/images/hedera_bronze.png";

function ActivityCard() {
  return (
    <div className="flex max-w-[380px] m-10 text-[#E5F0FF] border-b-[1px] border-b-[#3E526C] p-5 space-x-5 items-center text-sm">
      <span>1</span>
      <div className="relative">
        <img
          src={profileImage}
          className="max-w-[65px] object-contain"
          alt=""
        />
        <VerifyBadge className="absolute bottom-0 -right-2" />
      </div>
      <div className="text-sm">
        <h5>Guilty Panda Prison Gang</h5>
        <div className="flex my-3">
          <img src={HederaImage} className="w-[20px] object-contain" alt="" />
          <span className="ml-2">42,232</span>
        </div>
      </div>
      <span className="text-primary-red">+ 69,5%</span>
    </div>
  );
}

export default ActivityCard;
