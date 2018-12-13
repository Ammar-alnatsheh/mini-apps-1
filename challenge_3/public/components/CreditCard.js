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
        "div",
        { className: "form" },
        React.createElement(
          "h2",
          null,
          "Credit Card Form"
        ),
        React.createElement(
          "div",
          null,
          "Credit Card #:",
          React.createElement("input", { type: "number", name: "Cardnumber", placeholder: "12345" })
        ),
        React.createElement(
          "div",
          null,
          "Exp-date:",
          React.createElement("input", { type: "date", name: "ExpDate", placeholder: "MM/YYYY" })
        ),
        React.createElement(
          "div",
          null,
          "CVV:",
          React.createElement("input", { type: "number", name: "email", placeholder: "" })
        ),
        React.createElement(
          "div",
          null,
          "Zip Code:",
          React.createElement("input", { type: "number", name: "email", placeholder: "" })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      );
    }
  }]);

  return CreditCard;
}(React.Component);

window.CreditCard = CreditCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0NyZWRpdENhcmQuanN4Il0sIm5hbWVzIjpbIkNyZWRpdENhcmQiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7QUFHbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQ2dCLHlDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLFlBQTFCLEVBQXVDLGFBQVksT0FBbkQ7QUFEaEIsU0FGRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQ1cseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsYUFBWSxTQUE5QztBQURYLFNBTEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUNNLHlDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLE9BQTFCLEVBQWtDLGFBQVksRUFBOUM7QUFETixTQVJGO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFDVyx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxPQUExQixFQUFrQyxhQUFZLEVBQTlDO0FBRFgsU0FYRjtBQWNFLHVDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBZEYsT0FERjtBQWtCRDs7OztFQXpCb0JDLE1BQU1DLFM7O0FBNEI3QkMsT0FBT0osVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiQ3JlZGl0Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gIFxuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgPGgyPkNyZWRpdCBDYXJkIEZvcm08L2gyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDcmVkaXQgQ2FyZCAjOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIkNhcmRudW1iZXJcIiBwbGFjZWhvbGRlcj1cIjEyMzQ1XCI+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgRXhwLWRhdGU6PGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cIkV4cERhdGVcIiBwbGFjZWhvbGRlcj1cIk1NL1lZWVlcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDVlY6PGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFppcCBDb2RlOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgd2luZG93LkNyZWRpdENhcmQgPSBDcmVkaXRDYXJkOyJdfQ==