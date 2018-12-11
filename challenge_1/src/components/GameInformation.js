var GameInformation = (props) => (
  <div className="gameInfo">
    <div className="players">
        <h3>Player (X){props.firstPlayer.name}</h3>
        <h4>Score: {props.firstPlayer.score}</h4>

      <span className="spacer">
      </span>

        <h3>Player (O){props.secondPlayer.name}</h3>
        <h4>Score: {props.secondPlayer.score}</h4>
  
    </div>
    <button>Board Reset</button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.GameInformation = GameInformation;
