function Editform({ cards, setCards, id }) {
  const thisCard = cards.filter((card) => card.id === id)[0];
  const editThisCard = thisCard.id === id; // trying to match id of passed card to correct card in 'cards' array.
  console.log(editThisCard);

  function saveChanges(cardtochange) {
    setCards(
      cards.map(
        (
          card // intention is map back over the original array, and if the id matches that
        ) =>
          card.id === id // of the edited card, write the changed card back in at its ID
            ? {
                id: id,
                gamename: cardtochange.gamename,
                maxplayers: cardtochange.maxplayers,
                freespaces: cardtochange.freespaces,
                tablenum: cardtochange.tablenum,
              }
            : card // ... or just write the original back in place.
      )
    );
  }

  return (
    <>
      {editThisCard && ( // should only render if editThisCard is true.
        <div className="form">
          <p>Name of game:</p>
          <input type="text" value={thisCard.gamename}></input>

          <p>Max players: </p>
          <input type="text" value={thisCard.maxplayers}></input>
          <p>Free spaces: </p>
          <input type="text" value={thisCard.freespaces}></input>

          <p>Table #: </p>
          <input type="text" value={thisCard.tablenum}></input>
          <p></p>
          <button
            type="button"
            className="playbutton"
            onClick={saveChanges(thisCard)} //remove to see edit form - leave in for perpetual loop.
          >
            Save changes
          </button>
        </div>
      )}
    </>
  );
}

export default Editform;
