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
    key: "handleInputChange",
    value: function handleInputChange(e) {
      e.preventDefault();
      this.props.setCreditCard();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0NyZWRpdENhcmQuanN4Il0sIm5hbWVzIjpbIkNyZWRpdENhcmQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldENyZWRpdENhcmQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7QUFHbEI7Ozs7c0NBRWlCQyxDLEVBQUc7QUFDbkJBLFFBQUVDLGNBQUY7QUFDQSxXQUFLRixLQUFMLENBQVdHLGFBQVg7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxVQUFVLEtBQUtDLGlCQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQ2dCLHlDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLFlBQTFCLEVBQXVDLGFBQVksT0FBbkQ7QUFEaEIsU0FGRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQ1cseUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssU0FBeEIsRUFBa0MsYUFBWSxTQUE5QztBQURYLFNBTEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUNNLHlDQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLE9BQTFCLEVBQWtDLGFBQVksRUFBOUM7QUFETixTQVJGO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFDVyx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsTUFBSyxPQUExQixFQUFrQyxhQUFZLEVBQTlDO0FBRFgsU0FYRjtBQWNFLHVDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBZEYsT0FERjtBQWtCRDs7OztFQTlCb0JDLE1BQU1DLFM7O0FBaUM3QkMsT0FBT1IsVUFBUCxHQUFvQkEsVUFBcEIiLCJmaWxlIjoiQ3JlZGl0Q2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWRpdENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gIFxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuc2V0Q3JlZGl0Q2FyZCgpO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9PlxuICAgICAgICAgIDxoMj5DcmVkaXQgQ2FyZCBGb3JtPC9oMj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQ3JlZGl0IENhcmQgIzo8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJDYXJkbnVtYmVyXCIgcGxhY2Vob2xkZXI9XCIxMjM0NVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEV4cC1kYXRlOjxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJFeHBEYXRlXCIgcGxhY2Vob2xkZXI9XCJNTS9ZWVlZXCI+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQ1ZWOjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBaaXAgQ29kZTo8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCI+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB3aW5kb3cuQ3JlZGl0Q2FyZCA9IENyZWRpdENhcmQ7Il19