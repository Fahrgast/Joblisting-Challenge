export function FilterListings(listings, filter) {
  /* 
        Compare job listing categories with filter categories

        -> if all filters are present in the listings categories,
            add the listing to the new (filtered) list of job listings
     */
  let checkFilter = (listingCategories, currentFilters) =>
    currentFilters.every((category) => listingCategories.includes(category));

  /* If current filter is not empty */
  if (typeof filter !== "undefined" && filter.length > -1) {
    let filteredListings = listings.filter((listing) => {
      /* 
                get all categories of the current listing element amd 
                combine them into a single array so we can compare it
                with the current filters more easily
      */
      let listingCategories = [
        listing.role,
        listing.level,
        ...listing.languages,
        ...listing.tools,
      ];

      return checkFilter(listingCategories, filter);
    });
    return filteredListings;
  } else {
    return listings;
  }
}
