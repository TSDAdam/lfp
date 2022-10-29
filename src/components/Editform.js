function Editform({ id, gamename, maxplayers, freespaces, tablenum }) {
  console.log(
    "clicked",
    { id },
    { gamename },
    { maxplayers },
    { freespaces },
    { tablenum }
  );
  return (
    <div className="form">
      <p>Name of game:</p>
      <input type="text" value={gamename}></input>

      <p>Max players: </p>
      <input type="text" value={maxplayers}></input>
      <p>Free spaces: </p>
      <input type="text" value={freespaces}></input>

      <p>Table #: </p>
      <input type="text" value={tablenum}></input>
      <p></p>
      <button type="button" className="playbutton">
        Save changes
      </button>
    </div>
  );
}

export default Editform;
