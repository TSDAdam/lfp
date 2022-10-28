import ReactFitText from "react-fittext";

function Displaycards() {
  const cards = []; // array for all the game cards
  const firstcard = {
    id: 1,
    gamename: "El Dorado",
    maxplayers: 4,
    freespaces: 1,
    tablenum: 5,
  };

  cards.push(firstcard);
  console.log({ cards });
  return (
    <div>
      {cards.map(({ id, gamename, maxplayers, freespaces, tablenum }) => {
        return (
          <div key={id}>
            <div className="cardwrapper">
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
                <button type="button" className="editbutton">
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
    </div>
  );
}

export default Displaycards;
