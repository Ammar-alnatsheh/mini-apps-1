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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NoaXBwaW5nLmpzeCJdLCJuYW1lcyI6WyJTaGlwcGluZyIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDWEEsS0FEVztBQUdsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDUyx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QjtBQURULFNBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNTLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE9BQXhCO0FBRFQsU0FMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ08seUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEI7QUFEUCxTQVJBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFDUSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxPQUF4QjtBQURSLFNBWEE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUNXLHlDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLFNBQTFCO0FBRFgsU0FkQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUNVLHlDQUFPLE1BQUssS0FBWixFQUFrQixNQUFLLE9BQXZCO0FBRFYsU0FqQkE7QUFvQkEsdUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFwQkEsT0FERjtBQXdCRDs7OztFQS9Ca0JDLE1BQU1DLFM7O0FBa0MzQkMsT0FBT0osUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiU2hpcHBpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwcGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgXG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgPGgyPlNoaXBwaW5nIGZvcm08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIExpbmUgMTo8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZTFcIj48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBMaW5lIDI6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmUyXCIgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIENpdHk6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiA+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgU3RhdGU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFppcCBDb2RlOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInppcGNvZGVcIiA+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgUGhvbmUgIzo8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZVwiID48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gXG4gIHdpbmRvdy5TaGlwcGluZyA9IFNoaXBwaW5nOyJdfQ==