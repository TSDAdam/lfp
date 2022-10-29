import "./App.css";
// import Showcards from "./components/Showcards";
import Card from "./components/Card";
import Displaycards from "./components/Displaycards";

function App() {
  const lastID = 0;
  return (
    <div className="container">
      <Displaycards lastid={lastID} />
    </div>
  );
}

export default App;

/* <Card
id="1"
gamename="Ticket to Ride"
maxplayers="4"
freespaces="1"
tablenum="2"
/>
<Card
id="2"
gamename="Ticket to Ride: Europe"
maxplayers="4"
freespaces="1"
tablenum="2"
/>
<Card
id="3"
gamename="Endless Winter: Paleoamericans"
maxplayers="4"
freespaces="1"
tablenum="2"
/>

*/
