import "./seachbar.styles.css";

export function SearchBar(props) {
  return (
    <div className="searchbar-container">
      {props.activeFiltersArray.map((activeFilter) => (
        <div key={activeFilter}>
          <button>{activeFilter}</button>
          <img src="" alt="X" />
        </div>
      ))}
    </div>
  );
}
