import React from "react";
import ItemCarousel from "../ItemCarousel";
import CollectionCard from "./CollectionCard";

const staticResponsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Index({ title }) {
  return (
    <div className="text-white pl-10 ml-10 mt-16">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {/* Tabs  */}
      <ul className="flex items-center space-x-10 mt-5 text-xs font-semibold mb-5">
        <li className="bg-[#0E2542] py-3 px-5">All categories</li>
        <li>Trending</li>
        <li>Top</li>
        <li>Verified</li>
      </ul>
      <div className="my-3">
        <ItemCarousel responsive={staticResponsive}>
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </ItemCarousel>
      </div>
    </div>
  );
}

export default Index;
