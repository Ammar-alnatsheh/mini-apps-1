"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.handleInputChange = _this.handleInputChange.bind(_this);

    return _this;
  }

  _createClass(Item, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      e.preventDefault();
      this.props.setCart(e);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "item", onClick: this.handleInputChange.bind(this) },
        " ",
        this.props.item
      );
    }
  }]);

  return Item;
}(React.Component);

window.Item = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0l0ZW0uanN4Il0sIm5hbWVzIjpbIkl0ZW0iLCJwcm9wcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldENhcnQiLCJpdGVtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCOztBQUhpQjtBQUtsQjs7OztzQ0FFaUJDLEMsRUFBRztBQUNqQkEsUUFBRUMsY0FBRjtBQUNBLFdBQUtKLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkYsQ0FBbkI7QUFDSDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWYsRUFBc0IsU0FBVSxLQUFLRixpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBaEM7QUFBQTtBQUFzRSxhQUFLRixLQUFMLENBQVdNO0FBQWpGLE9BREY7QUFHRDs7OztFQWpCY0MsTUFBTUMsUzs7QUFvQnZCQyxPQUFPVixJQUFQLEdBQWNBLElBQWQiLCJmaWxlIjoiSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIFxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLnNldENhcnQoZSk7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBvbkNsaWNrPSB7dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpIH0+IHt0aGlzLnByb3BzLml0ZW19PC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuIFxuICB3aW5kb3cuSXRlbSA9IEl0ZW07XG4iXX0=