function Card({ gamename, maxplayers, freespaces, tablenum }) {
  return (
    <div className="card">
      <div className="gamename">{gamename}</div>
      <div className="details">
        <p>Setup for: </p>
        <p className="bignumbers">{maxplayers}</p>
      </div>
      <div className="details">
        <p>Spaces free:</p> <p className="bignumbers">{freespaces}</p>
      </div>
      <div className="details">
        <p>Table #</p>
        <p className="bignumbers">{tablenum}</p>
      </div>
      <button type="button" className="playbutton">
        I want to play
      </button>
      <br />
      <button type="button" className="editbutton">
        Edit
      </button>
    </div>
  );
}

export default Card;
