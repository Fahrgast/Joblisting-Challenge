import "./App.css";
import { useState, useEffect } from "react";
import { ListingContainer } from "./components/listings/listings-container.component";

function App() {
  const [listingData, setlistingData] = useState([]);

  useEffect(() => {
    var input = require("./data.json");
    setlistingData(input);
  }, []);

  return (
    <div className="App">
      <ListingContainer listings={listingData} />
    </div>
  );
}

export default App;
