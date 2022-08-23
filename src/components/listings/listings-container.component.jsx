import "./listings-container.styles.css";
import React from "react";
import { Listing } from "./listing/listing.component";

export function ListingContainer(props) {
  return (
    <div className="listing-list">
      {props.listings.map((listing) => (
        <Listing key={listing.id} listingData={listing} />
      ))}
    </div>
  );
}
