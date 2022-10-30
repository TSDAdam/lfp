import React from "react";
import ReactFitText from "react-fittext";
import Editform from "./Editform";

function Displaycards({ lastid }) {
  const [cards, setCards] = React.useState([
    {
      id: 1,
      gamename: "El Dorado",
      maxplayers: 4,
      freespaces: 1,
      tablenum: 5,
    },
    {
      id: 2,
      gamename: "Ticket to Ride",
      maxplayers: 4,
      freespaces: 2,
      tablenum: 3,
    },
  ]); // using the React state for the cards array

  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="cardwrapper">
      {cards.map(({ id, gamename, maxplayers, freespaces, tablenum }) => {
        return (
          <div key={id}>
            <div>
              <div className="card">
                <ReactFitText compressor={0.8}>
                  <div className="gamename">{gamename}</div>
                </ReactFitText>
                <div className="details">
                  <p>Setup for: </p>
                  <p className="bignumbers">{maxplayers}</p>
                </div>
                <div className="details">
                  <p>Spaces free:</p>
                  <p className="bignumbers">{freespaces}</p>
                </div>
                <div className="details">
                  <p>Table #</p>
                  <p className="bignumbers">{tablenum}</p>
                </div>
                <button type="button" className="playbutton">
                  I want to play
                </button>
                <br />
              </div>

              <div className="editbuttons">
                <button
                  type="button"
                  className="editbutton"
                  onClick={() => setShowForm(!showForm)}
                >
                  Edit
                </button>
                <button type="button" className="delbutton">
                  X
                </button>
              </div>
              {showForm && (
                <div>
                  <Editform
                    cards={cards.filter((card) => card.id === id)}
                    setCards={setCards}
                    id={id}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Displaycards;
// <Editform {...cards} />
