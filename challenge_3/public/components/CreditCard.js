"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreditCard = function (_React$Component) {
  _inherits(CreditCard, _React$Component);

  function CreditCard(props) {
    _classCallCheck(this, CreditCard);

    return _possibleConstructorReturn(this, (CreditCard.__proto__ || Object.getPrototypeOf(CreditCard)).call(this, props));
  }

  _createClass(CreditCard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "CreditCard form"
      );
    }
  }]);

  return CreditCard;
}(React.Component);

window.CreditCard = CreditCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0NyZWRpdENhcmQuanN4Il0sIm5hbWVzIjpbIkNyZWRpdENhcmQiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7QUFHbEI7Ozs7NkJBRVE7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESjtBQUdEOzs7O0VBVm9CQyxNQUFNQyxTOztBQWE3QkMsT0FBT0osVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiQ3JlZGl0Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gIFxuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aDE+Q3JlZGl0Q2FyZCBmb3JtPC9oMT5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgd2luZG93LkNyZWRpdENhcmQgPSBDcmVkaXRDYXJkOyJdfQ==