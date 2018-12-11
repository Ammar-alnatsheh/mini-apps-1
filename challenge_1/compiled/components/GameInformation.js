"use strict";

var GameInformation = function GameInformation(props) {
  return React.createElement(
    "div",
    { className: "gameInfo" },
    React.createElement(
      "div",
      { className: "players" },
      React.createElement(
        "h3",
        null,
        "Player (X)",
        props.firstPlayer.name
      ),
      React.createElement(
        "h4",
        null,
        "Score: ",
        props.firstPlayer.score
      ),
      React.createElement("span", { className: "spacer" }),
      React.createElement(
        "h3",
        null,
        "Player (O)",
        props.secondPlayer.name
      ),
      React.createElement(
        "h4",
        null,
        "Score: ",
        props.secondPlayer.score
      )
    ),
    React.createElement(
      "button",
      null,
      "Board Reset"
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.GameInformation = GameInformation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWVJbmZvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJHYW1lSW5mb3JtYXRpb24iLCJwcm9wcyIsImZpcnN0UGxheWVyIiwibmFtZSIsInNjb3JlIiwic2Vjb25kUGxheWVyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3BCO0FBQUE7QUFBQSxNQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsU0FBZjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQWVBLGNBQU1DLFdBQU4sQ0FBa0JDO0FBQWpDLE9BREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFZRixjQUFNQyxXQUFOLENBQWtCRTtBQUE5QixPQUZKO0FBSUUsb0NBQU0sV0FBVSxRQUFoQixHQUpGO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBZUgsY0FBTUksWUFBTixDQUFtQkY7QUFBbEMsT0FQSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQVlGLGNBQU1JLFlBQU4sQ0FBbUJEO0FBQS9CO0FBUkosS0FERjtBQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRixHQURvQjtBQUFBLENBQXRCOztBQWlCQTtBQUNBO0FBQ0FFLE9BQU9OLGVBQVAsR0FBeUJBLGVBQXpCIiwiZmlsZSI6IkdhbWVJbmZvcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lSW5mb3JtYXRpb24gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJnYW1lSW5mb1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyc1wiPlxuICAgICAgICA8aDM+UGxheWVyIChYKXtwcm9wcy5maXJzdFBsYXllci5uYW1lfTwvaDM+XG4gICAgICAgIDxoND5TY29yZToge3Byb3BzLmZpcnN0UGxheWVyLnNjb3JlfTwvaDQ+XG5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNlclwiPlxuICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxoMz5QbGF5ZXIgKE8pe3Byb3BzLnNlY29uZFBsYXllci5uYW1lfTwvaDM+XG4gICAgICAgIDxoND5TY29yZToge3Byb3BzLnNlY29uZFBsYXllci5zY29yZX08L2g0PlxuICBcbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uPkJvYXJkIFJlc2V0PC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5HYW1lSW5mb3JtYXRpb24gPSBHYW1lSW5mb3JtYXRpb247XG4iXX0=