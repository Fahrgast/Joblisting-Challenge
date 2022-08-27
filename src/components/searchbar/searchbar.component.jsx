import "./seachbar.styles.css";

export function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <div className="searchbar-categories">
        {props.activeFiltersArray.map((activeFilter) => (
          <div key={activeFilter}>
            <div className="searchbar-element">
              <button className="remove-filter-text">{activeFilter}</button>
              <button
                className="remove-filter-btn"
                onClick={() => props.changeFilter(activeFilter)}
              >
                <img
                  className="remove-btn-icon"
                  src="./images/icon-remove.svg"
                  alt="Remove Filter"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="searchbar-clear"
        onClick={() => props.changeFilter("clear")}
      >
        Clear
      </button>
    </div>
  );
}
