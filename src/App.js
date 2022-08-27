import "./App.css";
import { Header } from "./components/header/header.component";
import { ListingContainer } from "./components/listings/listings-container.component";
import jobs from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <ListingContainer listings={jobs} />
    </div>
  );
}

export default App;
