import "./listings-container.styles.css";
import React, { useEffect } from "react";
import { Listing } from "./listing/listing.component";
import { useState } from "react";

export function ListingContainer(props) {
  const [filters, setFilters] = useState(["Frontend"]);

  const filteredListings = props.listings.filter((listing) => {
    let listingCategories = [
      listing.role,
      listing.level,
      ...listing.languages,
      ...listing.tools,
    ];
    let checkFilter = (listingCategories, currentFilters) =>
      filters.every((category) => listingCategories.includes(category));
    return checkFilter(listingCategories, filters);
  });

  return (
    <div className="listings-list">
      {filteredListings.map((listing) => (
        <Listing key={listing.id} listingData={listing} />
      ))}
    </div>
  );
}
