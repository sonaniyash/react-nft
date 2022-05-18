import React from "react";

import collectionCover from "../../assets/images/collection-cover.png";
import collectionProfile from "../../assets/images/collection-profile.png";

import VerifyBadge from "../VerifyBadge";

function CollectionCard() {
  return (
    <div className="max-w-[360px] mr-3 rounded-lg shadow-md dark:bg-[#0A1F3A]/50">
      <div className="w-full object-contain">
        <img className="rounded-t-lg w-ful" src={collectionCover} alt="" />
        <div className="w-20 max-w-xs object-contain relative bottom-7 mx-auto">
          <img src={collectionProfile} alt="" />
          <VerifyBadge className="relative bottom-3 left-14" />
        </div>
      </div>
      <div className="p-5 pt-0 -mt-9 text-center">
        <h5 className="mb-2 text-md font-normal tracking-tight text-gray-900 dark:text-white">
          Gulity Panda Prison Gang
        </h5>
        <h6 className="mb-2 text-xs dark:text-primary-red light:text-primary-red">
          By GPPG
        </h6>
        <p className="mb-3 font-normal text-gray-700 text-sm dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}

export default CollectionCard;
