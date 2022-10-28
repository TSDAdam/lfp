import "./App.css";
// import Showcards from "./components/Showcards";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Card
        gamename="Ticket to Ride"
        maxplayers="4"
        freespaces="1"
        tablenum="2"
      />
      <Card
        gamename="Ticket to Ride: Europe"
        maxplayers="4"
        freespaces="1"
        tablenum="2"
      />
      <Card
        gamename="Endless Winter: Paleoamericans"
        maxplayers="4"
        freespaces="1"
        tablenum="2"
      />
    </div>
  );
}

export default App;
