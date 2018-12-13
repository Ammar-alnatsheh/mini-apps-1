"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkout = function (_React$Component) {
  _inherits(Checkout, _React$Component);

  function Checkout(props) {
    _classCallCheck(this, Checkout);

    return _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).call(this, props));
  }

  _createClass(Checkout, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      e.preventDefault();
      this.props.checkout();
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
          "Checkout Form"
        ),
        this.props.items.map(function (item) {
          return React.createElement(Item, { item: item.name, key: item.id });
        }),
        React.createElement(
          "div",
          null,
          React.createElement("input", { type: "submit", value: "Submit" })
        )
      );
    }
  }]);

  return Checkout;
}(React.Component);

window.Checkout = Checkout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0NoZWNrb3V0LmpzeCJdLCJuYW1lcyI6WyJDaGVja291dCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hlY2tvdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUVKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1hBLEtBRFc7QUFHbEI7Ozs7c0NBRWlCQyxDLEVBQUc7QUFDbkJBLFFBQUVDLGNBQUY7QUFDQSxXQUFLRixLQUFMLENBQVdHLFFBQVg7QUFDRDs7OzZCQUVROztBQUVMLGFBQ0U7QUFBQTtBQUFBLFVBQU0sVUFBVSxLQUFLQyxpQkFBckI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRyxhQUFLSixLQUFMLENBQVdLLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCO0FBQUEsaUJBQ3ZCLG9CQUFDLElBQUQsSUFBTSxNQUFNQyxLQUFLQyxJQUFqQixFQUF1QixLQUFLRCxLQUFLRSxFQUFqQyxHQUR1QjtBQUFBLFNBQXRCLENBRkg7QUFLRTtBQUFBO0FBQUE7QUFDQSx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQURBO0FBTEYsT0FERjtBQVdIOzs7O0VBekJvQkMsTUFBTUMsUzs7QUE0QjdCQyxPQUFPYixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJDaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENoZWNrb3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmNoZWNrb3V0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfT5cbiAgICAgICAgICA8aDI+Q2hlY2tvdXQgRm9ybTwvaDI+XG4gICAgICAgICAge3RoaXMucHJvcHMuaXRlbXMubWFwKCBpdGVtID0+IChcbiAgICAgICAgICA8SXRlbSBpdGVtPXtpdGVtLm5hbWV9IGtleT17aXRlbS5pZH0vPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICk7XG4gIH1cbn1cbiBcbndpbmRvdy5DaGVja291dCA9IENoZWNrb3V0OyJdfQ==