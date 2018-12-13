"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shipping = function (_React$Component) {
  _inherits(Shipping, _React$Component);

  function Shipping(props) {
    _classCallCheck(this, Shipping);

    return _possibleConstructorReturn(this, (Shipping.__proto__ || Object.getPrototypeOf(Shipping)).call(this, props));
  }

  _createClass(Shipping, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      e.preventDefault();
      this.props.setShipping();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleInputChange },
        React.createElement(
          "h2",
          null,
          "Shipping form"
        ),
        React.createElement(
          "div",
          null,
          "Line 1:",
          React.createElement("input", { type: "text", name: "line1" })
        ),
        React.createElement(
          "div",
          null,
          "Line 2:",
          React.createElement("input", { type: "text", name: "line2" })
        ),
        React.createElement(
          "div",
          null,
          "City:",
          React.createElement("input", { type: "text", name: "city" })
        ),
        React.createElement(
          "div",
          null,
          "State:",
          React.createElement("input", { type: "text", name: "state" })
        ),
        React.createElement(
          "div",
          null,
          "Zip Code:",
          React.createElement("input", { type: "number", name: "zipcode" })
        ),
        React.createElement(
          "div",
          null,
          "Phone #:",
          React.createElement("input", { type: "tel", name: "phone" })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      );
    }
  }]);

  return Shipping;
}(React.Component);

window.Shipping = Shipping;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NoaXBwaW5nLmpzeCJdLCJuYW1lcyI6WyJTaGlwcGluZyIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U2hpcHBpbmciLCJoYW5kbGVJbnB1dENoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1hBLEtBRFc7QUFHbEI7Ozs7c0NBRWlCQyxDLEVBQUc7QUFDbkJBLFFBQUVDLGNBQUY7QUFDQSxXQUFLRixLQUFMLENBQVdHLFdBQVg7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxVQUFVLEtBQUtDLGlCQUFyQjtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ1MseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEI7QUFEVCxTQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDUyx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QjtBQURULFNBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUNPLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCO0FBRFAsU0FSQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQ1EseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssT0FBeEI7QUFEUixTQVhBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFDVyx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxTQUExQjtBQURYLFNBZEE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFDVSx5Q0FBTyxNQUFLLEtBQVosRUFBa0IsTUFBSyxPQUF2QjtBQURWLFNBakJBO0FBb0JBLHVDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBcEJBLE9BREY7QUF3QkQ7Ozs7RUFwQ2tCQyxNQUFNQyxTOztBQXVDM0JDLE9BQU9SLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6IlNoaXBwaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcHBpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBcbiAgICB9XG4gIFxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuc2V0U2hpcHBpbmcoKTtcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfT5cbiAgICAgICAgPGgyPlNoaXBwaW5nIGZvcm08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIExpbmUgMTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZTFcIj48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBMaW5lIDI6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmUyXCIgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIENpdHk6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiA+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU3RhdGU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFppcCBDb2RlOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInppcGNvZGVcIiA+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgUGhvbmUgIzo8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiID48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgICApO1xuICAgIH1cbiAgfVxuIFxuICB3aW5kb3cuU2hpcHBpbmcgPSBTaGlwcGluZzsiXX0=