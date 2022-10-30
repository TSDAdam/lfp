function Editform({ cards, setCards, id }) {
  const thisCard = cards.filter((card) => card.id === id)[0];
  const editThisCard = thisCard.id === id; // trying to match id of passed card to correct card in 'cards' array.
  console.log(editThisCard);

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
          <button type="button" className="playbutton">
            Save changes
          </button>
        </div>
      )}
    </>
  );
}

export default Editform;
