import React, { useRef } from "react";

function Editform({ cards, setCards, id }) {
  const thisCard = cards.filter((card) => card.id === id)[0];
  const editThisCard = thisCard.id === id; // trying to match id of passed card to correct card in 'cards' array.

  const gamenameref = useRef(null);
  const maxplayersref = useRef(null);
  const freespacesref = useRef(null);
  const tablenumref = useRef(null);

  function saveChanges() {
    const newCardsArray = cards.map(
      (
        card // intention is map back over the original array, and if the id matches that
      ) =>
        card.id === id // of the edited card, write the changed card back in at its ID
          ? {
              id: id,
              gamename: gamenameref.current.value,
              maxplayers: maxplayersref.current.value,
              freespaces: freespacesref.current.value,
              tablenum: tablenumref.current.value,
            }
          : card // ... or just write the original back in place.
    );
    console.log(newCardsArray);
    setCards([newCardsArray]);
    console.log(cards);
  }

  return (
    <>
      {editThisCard && ( // should only render if editThisCard is true.
        <div className="form">
          <p>Name of game:</p>
          <input
            type="text"
            defaultValue={thisCard.gamename}
            ref={gamenameref}
          ></input>

          <p>Max players: </p>
          <input
            type="text"
            defaultValue={thisCard.maxplayers}
            ref={maxplayersref}
          ></input>
          <p>Free spaces: </p>
          <input
            type="text"
            defaultValue={thisCard.freespaces}
            ref={freespacesref}
          ></input>

          <p>Table #: </p>
          <input
            type="text"
            defaultValue={thisCard.tablenum}
            ref={tablenumref}
          ></input>
          <p></p>
          <button
            type="button"
            className="playbutton"
            onClick={() => saveChanges()} //remove to see edit form - leave in for perpetual loop.
          >
            Save changes
          </button>
        </div>
      )}
    </>
  );
}

export default Editform;

/* function saveChanges(cardtochange) {
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
  console.log(cards);
} */
