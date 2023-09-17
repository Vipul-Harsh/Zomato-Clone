import { Place } from "@mui/icons-material";
import "./App.css";
import EatCard from "./Components/EatCard";
import LocalFront from "./Components/LocalFront";
//import HomePage from "./Components/HomePage";
//import DineCard from "./Components/DineCard";
import NavBarHome from "./Components/NavBarHome";
//import EatCard from "./Components/EatCard";
//import PlaceCard from "./Components/PlaceCard";

import PlaceCard from "./Components/PlaceCard";
import GetApp from "./Components/GetApp";
import AccorDian from "./Components/AccorDian";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBarHome />
      <EatCard />
      <PlaceCard />
      <LocalFront />
      <GetApp />
      <div className="chap">
        <h1>Explore option near me</h1>
      </div>
      <div className="aco">
        <AccorDian />
      </div>
      <Footer />
    </div>
  );
}

export default App;
