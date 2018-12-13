"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_React$Component) {
  _inherits(Account, _React$Component);

  function Account(props) {
    _classCallCheck(this, Account);

    return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));
  }

  _createClass(Account, [{
    key: "handleInputChange",
    value: function handleInputChange(e) {
      e.preventDefault();
      this.props.setAccount();
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
          "Account form"
        ),
        React.createElement(
          "div",
          null,
          "Name:",
          React.createElement("input", { type: "text", name: "name", placeholder: "Mickey" })
        ),
        React.createElement(
          "div",
          null,
          "Password:",
          React.createElement("input", { type: "password", name: "password", placeholder: "********" })
        ),
        React.createElement(
          "div",
          null,
          "Email:",
          React.createElement("input", { type: "email", name: "email", placeholder: "example@HR.com" })
        ),
        React.createElement("input", { type: "submit", value: "Submit" })
      );
    }
  }]);

  return Account;
}(React.Component);

window.Account = Account;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FjY291bnQuanN4Il0sIm5hbWVzIjpbIkFjY291bnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEFjY291bnQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkdBQ1hBLEtBRFc7QUFHbEI7Ozs7c0NBRWlCQyxDLEVBQUc7QUFDbkJBLFFBQUVDLGNBQUY7QUFDQSxXQUFLRixLQUFMLENBQVdHLFVBQVg7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBTSxVQUFVLEtBQUtDLGlCQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQ08seUNBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsYUFBWSxRQUEzQztBQURQLFNBRkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUNXLHlDQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLFVBQTVCLEVBQXVDLGFBQVksVUFBbkQ7QUFEWCxTQUxGO0FBUUU7QUFBQTtBQUFBO0FBQUE7QUFDUSx5Q0FBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxPQUF6QixFQUFpQyxhQUFZLGdCQUE3QztBQURSLFNBUkY7QUFXRSx1Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQVhGLE9BREY7QUFlRDs7OztFQTNCaUJDLE1BQU1DLFM7O0FBOEIxQkMsT0FBT1IsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gIFxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMuc2V0QWNjb3VudCgpO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9PlxuICAgICAgICAgIDxoMj5BY2NvdW50IGZvcm08L2gyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBOYW1lOjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJNaWNrZXlcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBQYXNzd29yZDo8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEVtYWlsOjxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImV4YW1wbGVASFIuY29tXCI+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgXG4gIHdpbmRvdy5BY2NvdW50ID0gQWNjb3VudDsiXX0=