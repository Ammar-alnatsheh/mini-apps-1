"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameBoard = function (_React$Component) {
  _inherits(GameBoard, _React$Component);

  function GameBoard(props) {
    _classCallCheck(this, GameBoard);

    return _possibleConstructorReturn(this, (GameBoard.__proto__ || Object.getPrototypeOf(GameBoard)).call(this, props));
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 


  _createClass(GameBoard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        "hello"
      );
    }
  }]);

  return GameBoard;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.GameBoard = GameBoard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dhbWVCb2FyZC5qcyJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFHbEI7O0FBRUQ7Ozs7OzZCQUNTO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFHRDs7OztFQVhxQkMsTUFBTUMsUzs7QUFlOUI7QUFDQTs7O0FBQ0FDLE9BQU9KLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkdhbWVCb2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICBcbiAgfVxuXG4gIC8vIEN1cnJlbnRseSwgdGhlIGltYWdlIGJlaW5nIGRpc3BsYXllZCBpcyBoYXJkY29kZWQgZnJvbSB0aW55dXJsLmNvbSBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aDM+aGVsbG88L2gzPlxuICAgIClcbiAgfVxufVxuXG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuR2FtZUJvYXJkID0gR2FtZUJvYXJkOyJdfQ==