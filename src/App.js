import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/header/header.component";
import { ListingContainer } from "./components/listings/listings-container.component";

function App() {
  const [listingData, setlistingData] = useState([]);

  useEffect(() => {
    var input = require("./data.json");
    setlistingData(input);
  }, []);

  //TODO Searchbar buttons And Styling
  return (
    <div className="App">
      <Header />
      <ListingContainer listings={listingData} />
    </div>
  );
}

export default App;
