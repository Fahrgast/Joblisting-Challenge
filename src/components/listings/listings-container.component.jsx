import "./listings-container.styles.css";
import React, { useEffect, useState } from "react";
import { Listing } from "./listing/listing.component";
import { FilterListings } from "../filter/filter.component";

/*
  This component compares the current listings with the applied
  filters and the listings that need to be rendered to the
  "Listing" component 
*/
export function ListingContainer(props) {
  const [filteredListings, setFilteredListings] = useState([]);
  const [filters, setFilters] = useState([]);
  const [initialListings, setInitialListings] = useState([]);

  if (initialListings !== props.listings) {
    setInitialListings(props.listings);
  }

  function ChangeFilter(category) {
    const index = filters.indexOf(category);
    if (index === -1) {
      filters.push(category);
      let newFilters = [...filters];
      setFilters(newFilters);
    } else if (index > -1) {
      filters.splice(index, 1);
      let newFilters = [...filters];
      setFilters(newFilters);
    }
  }

  /* 
    Whenever a filter is added or removed, we filter all the job 
    listings with the corresponding categories
  */
  useEffect(() => {
    let filtered = FilterListings(props.listings, filters);
    setFilteredListings(filtered); // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialListings]);

  useEffect(() => {
    let filtered = FilterListings(props.listings, filters);
    setFilteredListings(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className="listings-list">
      {filteredListings.map((listing) => (
        <Listing
          key={listing.id}
          listingData={listing}
          changeFilter={ChangeFilter}
        />
      ))}
    </div>
  );
}
