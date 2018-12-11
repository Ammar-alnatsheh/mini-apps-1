"use strict";

var GameInformation = function GameInformation(props) {
  return React.createElement(
    "div",
    { className: "gameInfo" },
    React.createElement(
      "div",
      { className: "players" },
      React.createElement("div", { className: "playerOne" }),
      React.createElement("span", { className: "spacer" }),
      React.createElement("div", { className: "playerTwo" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Zpc2hUYWJsZS5qcyJdLCJuYW1lcyI6WyJHYW1lSW5mb3JtYXRpb24iLCJwcm9wcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUNwQjtBQUFBO0FBQUEsTUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFNBQWY7QUFDRSxtQ0FBSyxXQUFVLFdBQWYsR0FERjtBQUdFLG9DQUFNLFdBQVUsUUFBaEIsR0FIRjtBQUtFLG1DQUFLLFdBQVUsV0FBZjtBQUxGLEtBREY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEYsR0FEb0I7QUFBQSxDQUF0Qjs7QUFjQTtBQUNBO0FBQ0FDLE9BQU9GLGVBQVAsR0FBeUJBLGVBQXpCIiwiZmlsZSI6IkZpc2hUYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lSW5mb3JtYXRpb24gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJnYW1lSW5mb1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJPbmVcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VyXCI+XG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclR3b1wiPlxuICAgICAgPC9kaXY+IFxuICAgIDwvZGl2PlxuICAgIDxidXR0b24+Qm9hcmQgUmVzZXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LkdhbWVJbmZvcm1hdGlvbiA9IEdhbWVJbmZvcm1hdGlvbjtcbiJdfQ==