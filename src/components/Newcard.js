import React, { useRef } from "react";

function Newcard({
  cards,
  setCards,
  lastid,
  setLastID,
  showForm,
  setShowForm,
}) {
  const gamenameref = useRef(null);
  const maxplayersref = useRef(null);
  const freespacesref = useRef(null);
  const tablenumref = useRef(null);

  function saveChanges() {
    const newCard = {
      id: lastid + 1,
      gamename: gamenameref.current.value,
      maxplayers: maxplayersref.current.value,
      freespaces: freespacesref.current.value,
      tablenum: tablenumref.current.value,
    };
    console.log(newCard);
    setLastID(lastid + 1);
    setCards([...cards, newCard]);
    console.log(cards);
  }
  return (
    <>
      <div className="form">
        <p>Name of game:</p>
        <input type="text" ref={gamenameref}></input>

        <p>Max players:</p>
        <input type="text" ref={maxplayersref}></input>
        <p>Free spaces: </p>
        <input type="text" ref={freespacesref}></input>

        <p>Table #: </p>
        <input type="text" ref={tablenumref}></input>
        <p></p>
        <button
          type="button"
          className="playbutton"
          onClick={() => {
            saveChanges();
            setShowForm(!showForm);
          }} //remove to see edit form - leave in for perpetual loop.
        >
          Save changes
        </button>
      </div>
    </>
  );
}

export default Newcard;
