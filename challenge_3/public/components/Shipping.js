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
        "h1",
        null,
        "Shipping form"
      );
    }
  }]);

  return Shipping;
}(React.Component);

window.Shipping = Shipping;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NoaXBwaW5nLmpzeCJdLCJuYW1lcyI6WyJTaGlwcGluZyIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUTs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDWEEsS0FEVztBQUdsQjs7Ozs2QkFFUTtBQUNQLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKO0FBR0Q7Ozs7RUFWa0JDLE1BQU1DLFM7O0FBYTNCQyxPQUFPSixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJTaGlwcGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXBwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICBcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGgxPlNoaXBwaW5nIGZvcm08L2gxPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiBcbiAgd2luZG93LlNoaXBwaW5nID0gU2hpcHBpbmc7Il19