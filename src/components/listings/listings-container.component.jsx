import "./listings-container.styles.css";
import React, { useEffect, useState } from "react";
import { Listing } from "./listing/listing.component";
import { FilterListings } from "../filter/filter.component";
import { SearchBar } from "../searchbar/searchbar.component";

/*
  This component compares the current listings with the applied
  filters and the listings that need to be rendered to the
  "Listing" component 
*/
export function ListingContainer(props) {
  const [filteredListings, setFilteredListings] = useState([]);
  const [filters, setFilters] = useState([]);
  const [initialListings, setInitialListings] = useState([]);
  const searchbar = document.querySelector(".searchbar-container");
  const searchbarClear = document.querySelector(".searchbar-clear");
  const firstListing = document.querySelector(".listing:nth-of-type(2)");

  if (initialListings !== props.listings) {
    setInitialListings(props.listings);
  }

  /* Set the filters array to the new filters after a category button or "clear" has been clicked */
  function ChangeFilter(category) {
    if (category !== "clear") {
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
    } else {
      let newFilters = [];
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
    /* Show/Hide the searchbar depending on if there are filters chosen or not*/
    if (
      searchbar &&
      filters.length === 0 &&
      searchbar.style.height === "fit-content"
    ) {
      searchbarClear.style.display = "none";
      searchbar.style.height = 0;
      firstListing.style.marginTop = "6rem";
    } else if (
      filters.length > 0 &&
      (searchbar.style.height === "0px" || searchbar.style.height == 0)
    ) {
      searchbarClear.style.display = "block";
      searchbar.style.height = "fit-content";
      firstListing.style.marginTop = "4rem";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className="listings-list">
      <SearchBar activeFiltersArray={filters} changeFilter={ChangeFilter} />
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
