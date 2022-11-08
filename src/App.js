import "./App.css";
import React from "react";
import Displaycards from "./components/Displaycards";
import Newcard from "./components/Newcard";

function App() {
  const [cards, setCards] = React.useState([
    {
      id: 0,
      gamename: "El Dorado",
      maxplayers: "4",
      freespaces: "1",
      tablenum: "5",
    },
    {
      id: 1,
      gamename: "Ticket to Ride",
      maxplayers: "4",
      freespaces: "2",
      tablenum: "3",
    },
  ]);
  const [showNewForm, setShowNewForm] = React.useState(false);
  const [lastID, setLastID] = React.useState(1);

  return (
    <div className="container">
      <button
        type="button"
        className="playbutton"
        onClick={() => setShowNewForm(!showNewForm)}
      >
        Add a game
      </button>
      <Displaycards
        cards={cards}
        setCards={setCards}
        lastid={lastID}
        setLastID={setLastID}
      />

      {showNewForm && (
        <div>
          <Newcard
            cards={cards}
            setCards={setCards}
            lastid={lastID}
            setLastID={setLastID}
            showForm={showNewForm}
            setShowForm={setShowNewForm}
          />
        </div>
      )}
    </div>
  );
}

export default App;
