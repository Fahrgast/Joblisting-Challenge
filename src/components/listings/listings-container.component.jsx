import "./listings-container.styles.css";
import React, { useEffect, useState } from "react";
import { Listing } from "./listing/listing.component";

export function ListingContainer(props) {
  const [filters, setFilters] = useState(["Frontend", "CSS"]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    const filterListings = props.listings.filter((listing) => {
      let listingCategories = [
        listing.role,
        listing.level,
        ...listing.languages,
        ...listing.tools,
      ];
      let checkFilter = (listingCategories, currentFilters) =>
        currentFilters.every((category) =>
          listingCategories.includes(category)
        );
      return checkFilter(listingCategories, filters);
    });

    setFilteredListings(filterListings);
  }, [filters]);

  return (
    <div className="listings-list">
      {filteredListings.map((listing) => (
        <Listing key={listing.id} listingData={listing} />
      ))}
    </div>
  );
}
