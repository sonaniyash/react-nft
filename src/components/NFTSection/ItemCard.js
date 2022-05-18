import React from "react";

import { FaRegHeart } from "react-icons/fa";

import HederaImage from "../../assets/images/hedera_bronze.png";

function ItemCard({ imageUrl, collectionName, title, price, like }) {
  return (
    <div className="max-w-[350px] mr-5 text-sm text-white rounded-lg border border-gray-20 0 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-full object-contain rounded-t-lg"
        src={imageUrl}
        alt=""
      />
      {/* Card Details  */}
      <div className="p-3 text-sm font-semibold">
        {/* Header     */}
        <div className="flex justify-between text-white/50 my-2 text-[12px]">
          <h5>{collectionName} </h5>
          <h5>Price</h5>
        </div>
        {/* Name       */}
        <div>
          <div className="flex justify-between space-x-5">
            <h5>{title}</h5>
            <div>
              <div className="flex">
                <img
                  src={HederaImage}
                  className="w-[20px] object-contain"
                  alt=""
                />
                <span className="ml-2">{price}</span>
              </div>
              <div className="flex justify-center my-3 items-center text-white/50">
                <FaRegHeart className="cursor-pointer text-s" />
                <span className="inline-block ml-3">{like}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
