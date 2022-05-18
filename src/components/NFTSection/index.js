import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

import ItemCarousel from "../ItemCarousel";
import ItemCard from "./ItemCard";

const GET_NFT_DATA = gql`
  query {
    getAllArtworks {
      id
      title
      image
      imageUrl
      owner {
        firstName
        lastName
      }
      attributes {
        trait_type
        value
      }
      price
      like
    }
  }
`;

function Index({ title }) {
  const { loading, error, data } = useQuery(GET_NFT_DATA);
  const [allArtworks, setAllArtworks] = useState([]);
  useEffect(() => {
    if (!loading) {
      setAllArtworks(data.getAllArtworks);
    }
  }, [data]);

  return (
    <div className="text-white pl-14 ml-3 my-12">
      <h2 className="text-2xl my-2 font-semibold">{title}</h2>
      {/* Tabs  */}
      <div className="my-3">
        {allArtworks.length > 0 ? (
          <ItemCarousel>
            {allArtworks.map((artwork) => (
              <ItemCard
                key={artwork.id}
                collectionName="Guilty Panda Prison Gang"
                like={artwork.like}
                price={artwork.price}
                imageUrl={artwork.imageUrl}
                title={artwork.title}
              />
            ))}
          </ItemCarousel>
        ) : (
          <>
            <h1>Loading</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
