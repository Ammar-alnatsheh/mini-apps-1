"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shopping = function (_React$Component) {
  _inherits(Shopping, _React$Component);

  function Shopping(props) {
    _classCallCheck(this, Shopping);

    return _possibleConstructorReturn(this, (Shopping.__proto__ || Object.getPrototypeOf(Shopping)).call(this, props));
  }

  _createClass(Shopping, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      e.preventDefault();
      this.props.setCart(this.state.items);
    }
  }, {
    key: "addItem",
    value: function addItem(e) {
      e.preventDefault();
      this.setState({
        items: this.state.item.push(e.target.val)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "form",
        { onSubmit: this.handleInputChange },
        React.createElement(
          "h2",
          null,
          "Shopping Form"
        ),
        this.props.items.map(function (item) {
          return React.createElement(Item, { item: item.name, key: item.id, addItem: _this2.addItem.bind(_this2) });
        }),
        React.createElement(
          "div",
          null,
          React.createElement("input", { type: "submit", value: "Submit" })
        )
      );
    }
  }]);

  return Shopping;
}(React.Component);

window.Shopping = Shopping;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Nob3BwaW5nLmpzeCJdLCJuYW1lcyI6WyJTaG9wcGluZyIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0Q2FydCIsInN0YXRlIiwiaXRlbXMiLCJzZXRTdGF0ZSIsIml0ZW0iLCJwdXNoIiwidGFyZ2V0IiwidmFsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJtYXAiLCJuYW1lIiwiaWQiLCJhZGRJdGVtIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1hBLEtBRFc7QUFHbEI7Ozs7c0NBRWlCQyxDLEVBQUc7QUFDbkJBLFFBQUVDLGNBQUY7QUFDQSxXQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FBbUIsS0FBS0MsS0FBTCxDQUFXQyxLQUE5QjtBQUNEOzs7NEJBRU9KLEMsRUFBRztBQUNUQSxRQUFFQyxjQUFGO0FBQ0EsV0FBS0ksUUFBTCxDQUFjO0FBQ1pELGVBQU8sS0FBS0QsS0FBTCxDQUFXRyxJQUFYLENBQWdCQyxJQUFoQixDQUFxQlAsRUFBRVEsTUFBRixDQUFTQyxHQUE5QjtBQURLLE9BQWQ7QUFJRDs7OzZCQUVRO0FBQUE7O0FBRUwsYUFDRTtBQUFBO0FBQUEsVUFBTSxVQUFVLEtBQUtDLGlCQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVHLGFBQUtYLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQk8sR0FBakIsQ0FBc0I7QUFBQSxpQkFDdkIsb0JBQUMsSUFBRCxJQUFNLE1BQU1MLEtBQUtNLElBQWpCLEVBQXVCLEtBQUtOLEtBQUtPLEVBQWpDLEVBQXFDLFNBQVMsT0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCLE1BQWxCLENBQTlDLEdBRHVCO0FBQUEsU0FBdEIsQ0FGSDtBQUtFO0FBQUE7QUFBQTtBQUNBLHlDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBREE7QUFMRixPQURGO0FBV0g7Ozs7RUFoQ2tCQyxNQUFNQyxTOztBQW1DM0JDLE9BQU9wQixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJTaG9wcGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNob3BwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICBcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnByb3BzLnNldENhcnQodGhpcy5zdGF0ZS5pdGVtcyk7XG4gICAgfVxuXG4gICAgYWRkSXRlbShlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXRlbXM6IHRoaXMuc3RhdGUuaXRlbS5wdXNoKGUudGFyZ2V0LnZhbClcbiAgICAgIH0pO1xuXG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0+XG4gICAgICAgICAgICA8aDI+U2hvcHBpbmcgRm9ybTwvaDI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5pdGVtcy5tYXAoIGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEl0ZW0gaXRlbT17aXRlbS5uYW1lfSBrZXk9e2l0ZW0uaWR9IGFkZEl0ZW09e3RoaXMuYWRkSXRlbS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbiAgXG4gIHdpbmRvdy5TaG9wcGluZyA9IFNob3BwaW5nOyJdfQ==