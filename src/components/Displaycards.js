import React from "react";
import ReactFitText from "react-fittext";
import Editform from "./Editform";

function Displaycards({ cards, setCards, lastid }) {
  const [showForm, setShowForm] = React.useState(false);
  const [currentid, setCurrentid] = React.useState(0);

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
                  onClick={() => {
                    setShowForm(!showForm);
                    setCurrentid(id);
                  }}
                >
                  Edit
                </button>
                <button type="button" className="delbutton">
                  X
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {showForm && (
        <div>
          <Editform
            cards={cards}
            setCards={setCards}
            id={currentid}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </div>
      )}
    </div>
  );
}

export default Displaycards;
