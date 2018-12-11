'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      board: [],
      playerOne: null,
      playerTwo: null

    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var playerOne = {};
      var playerOneName = prompt("First Player Name?");
      playerOne['name'] = playerOneName;
      playerOne['score'] = 0;

      var playerTwo = {};
      var playerTwoName = prompt("Second Player Name?");
      playerTwo['name'] = playerTwoName;
      playerTwo['score'] = 0;

      this.setState({
        board: [],
        playerOne: playerOne,
        playerTwo: playerTwo
      });

      this.resetBoard();
    }
  }, {
    key: 'resetBoard',
    value: function resetBoard() {

      this.setState({
        board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        playerOne: this.state.playerOne,
        playerTwo: this.state.playerTwo,
        turn: 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Tic Tac Toe'
        ),
        React.createElement(GameInformation, { firstPlayer: this.state.playerOne, secondPlayer: this.state.playerTwo, turn: this.state.turn })
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9hcmQiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJwbGF5ZXJPbmVOYW1lIiwicHJvbXB0IiwicGxheWVyVHdvTmFtZSIsInNldFN0YXRlIiwicmVzZXRCb2FyZCIsInR1cm4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFFRixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsaUJBQVcsSUFGQTtBQUdYQyxpQkFBVzs7QUFIQSxLQUFiO0FBSGlCO0FBU2xCOzs7O3dDQUVtQjtBQUNoQixVQUFJRCxZQUFZLEVBQWhCO0FBQ0EsVUFBSUUsZ0JBQWdCQyxPQUFPLG9CQUFQLENBQXBCO0FBQ0FILGdCQUFVLE1BQVYsSUFBb0JFLGFBQXBCO0FBQ0FGLGdCQUFVLE9BQVYsSUFBcUIsQ0FBckI7O0FBRUEsVUFBSUMsWUFBWSxFQUFoQjtBQUNBLFVBQUlHLGdCQUFnQkQsT0FBTyxxQkFBUCxDQUFwQjtBQUNBRixnQkFBVSxNQUFWLElBQW9CRyxhQUFwQjtBQUNBSCxnQkFBVSxPQUFWLElBQXFCLENBQXJCOztBQUVBLFdBQUtJLFFBQUwsQ0FBYztBQUNWTixlQUFPLEVBREc7QUFFVkMsbUJBQVdBLFNBRkQ7QUFHVkMsbUJBQVdBO0FBSEQsT0FBZDs7QUFNQSxXQUFLSyxVQUFMO0FBQ0g7OztpQ0FFWTs7QUFFVCxXQUFLRCxRQUFMLENBQWM7QUFDVk4sZUFBTyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFULEVBQWlCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQWpCLENBREc7QUFFVkMsbUJBQVcsS0FBS0YsS0FBTCxDQUFXRSxTQUZaO0FBR1ZDLG1CQUFXLEtBQUtILEtBQUwsQ0FBV0csU0FIWjtBQUlWTSxjQUFNO0FBSkksT0FBZDtBQU9IOzs7NkJBR1E7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUVJLDRCQUFDLGVBQUQsSUFBaUIsYUFBYSxLQUFLVCxLQUFMLENBQVdFLFNBQXpDLEVBQW9ELGNBQWMsS0FBS0YsS0FBTCxDQUFXRyxTQUE3RSxFQUF3RixNQUFNLEtBQUtILEtBQUwsQ0FBV1MsSUFBekc7QUFGSixPQURKO0FBT0Q7Ozs7RUFyRGFDLE1BQU1DLFM7O0FBd0R0QjtBQUNBOzs7QUFDQUMsT0FBT2QsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBib2FyZDogW10sXG4gICAgICAgIHBsYXllck9uZTogbnVsbCxcbiAgICAgICAgcGxheWVyVHdvOiBudWxsLFxuXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgcGxheWVyT25lID0ge307XG4gICAgICAgIHZhciBwbGF5ZXJPbmVOYW1lID0gcHJvbXB0KFwiRmlyc3QgUGxheWVyIE5hbWU/XCIpO1xuICAgICAgICBwbGF5ZXJPbmVbJ25hbWUnXSA9IHBsYXllck9uZU5hbWU7XG4gICAgICAgIHBsYXllck9uZVsnc2NvcmUnXSA9IDA7XG5cbiAgICAgICAgdmFyIHBsYXllclR3byA9IHt9O1xuICAgICAgICB2YXIgcGxheWVyVHdvTmFtZSA9IHByb21wdChcIlNlY29uZCBQbGF5ZXIgTmFtZT9cIik7XG4gICAgICAgIHBsYXllclR3b1snbmFtZSddID0gcGxheWVyVHdvTmFtZTtcbiAgICAgICAgcGxheWVyVHdvWydzY29yZSddID0gMDtcbiAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBib2FyZDogW10sXG4gICAgICAgICAgICBwbGF5ZXJPbmU6IHBsYXllck9uZSxcbiAgICAgICAgICAgIHBsYXllclR3bzogcGxheWVyVHdvXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNldEJvYXJkKCk7XG4gICAgfVxuXG4gICAgcmVzZXRCb2FyZCgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGJvYXJkOiBbWzAsMCwwXSxbMCwwLDBdLFswLDAsMF1dLFxuICAgICAgICAgICAgcGxheWVyT25lOiB0aGlzLnN0YXRlLnBsYXllck9uZSxcbiAgICAgICAgICAgIHBsYXllclR3bzogdGhpcy5zdGF0ZS5wbGF5ZXJUd28sXG4gICAgICAgICAgICB0dXJuOiAxXG4gICAgICAgICAgfSk7XG5cbiAgICB9XG4gIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDE+VGljIFRhYyBUb2U8L2gxPlxuICAgICAgICAgICAgICA8R2FtZUluZm9ybWF0aW9uIGZpcnN0UGxheWVyPXt0aGlzLnN0YXRlLnBsYXllck9uZX0gc2Vjb25kUGxheWVyPXt0aGlzLnN0YXRlLnBsYXllclR3b30gdHVybj17dGhpcy5zdGF0ZS50dXJufS8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PiAgICAgXG4gICAgICApO1xuICAgIH1cbiAgfVxuIFxuICAvLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4gIC8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG4gIHdpbmRvdy5BcHAgPSBBcHA7Il19