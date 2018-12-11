"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FishTableRow = function (_React$Component) {
  _inherits(FishTableRow, _React$Component);

  function FishTableRow(props) {
    _classCallCheck(this, FishTableRow);

    var _this = _possibleConstructorReturn(this, (FishTableRow.__proto__ || Object.getPrototypeOf(FishTableRow)).call(this, props));

    _this.state = {
      showDescription: false
    };
    return _this;
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 


  _createClass(FishTableRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "tr",
        { onClick: function onClick() {
            return _this2.setState({ showDescription: !_this2.state.showDescription });
          } },
        React.createElement(
          "td",
          { className: "fish-name" },
          this.props.fish.name
        ),
        React.createElement(
          "td",
          null,
          React.createElement("img", { src: this.props.fish.image })
        ),
        this.state.showDescription ? React.createElement(
          "td",
          { className: "fish-description" },
          this.props.fish.description
        ) : null
      );
    }
  }]);

  return FishTableRow;
}(React.Component);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Zpc2hUYWJsZVJvdy5qcyJdLCJuYW1lcyI6WyJGaXNoVGFibGVSb3ciLCJwcm9wcyIsInN0YXRlIiwic2hvd0Rlc2NyaXB0aW9uIiwic2V0U3RhdGUiLCJmaXNoIiwibmFtZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQjtBQUROLEtBQWI7QUFGaUI7QUFLbEI7O0FBRUQ7Ozs7OzZCQUNTO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSSxTQUFTO0FBQUEsbUJBQU0sT0FBS0MsUUFBTCxDQUFjLEVBQUNELGlCQUFpQixDQUFDLE9BQUtELEtBQUwsQ0FBV0MsZUFBOUIsRUFBZCxDQUFOO0FBQUEsV0FBYjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsV0FBZDtBQUEyQixlQUFLRixLQUFMLENBQVdJLElBQVgsQ0FBZ0JDO0FBQTNDLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSx1Q0FBSyxLQUFLLEtBQUtMLEtBQUwsQ0FBV0ksSUFBWCxDQUFnQkUsS0FBMUI7QUFERixTQUZGO0FBS0csYUFBS0wsS0FBTCxDQUFXQyxlQUFYLEdBQTZCO0FBQUE7QUFBQSxZQUFJLFdBQVUsa0JBQWQ7QUFBa0MsZUFBS0YsS0FBTCxDQUFXSSxJQUFYLENBQWdCRztBQUFsRCxTQUE3QixHQUFtRztBQUx0RyxPQURGO0FBU0Q7Ozs7RUFuQndCQyxNQUFNQyxTOztBQXNCakM7QUFDQTs7O0FBQ0FWLGFBQWFXLFNBQWIsR0FBeUI7QUFDdkJOLFFBQU1JLE1BQU1HLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQUROLENBQXpCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT2YsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoiRmlzaFRhYmxlUm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmlzaFRhYmxlUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dEZXNjcmlwdGlvbjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLy8gQ3VycmVudGx5LCB0aGUgaW1hZ2UgYmVpbmcgZGlzcGxheWVkIGlzIGhhcmRjb2RlZCBmcm9tIHRpbnl1cmwuY29tIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93RGVzY3JpcHRpb246ICF0aGlzLnN0YXRlLnNob3dEZXNjcmlwdGlvbn0pfT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZpc2gtbmFtZVwiPnt0aGlzLnByb3BzLmZpc2gubmFtZX08L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZmlzaC5pbWFnZX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Rlc2NyaXB0aW9uID8gPHRkIGNsYXNzTmFtZT1cImZpc2gtZGVzY3JpcHRpb25cIj57dGhpcy5wcm9wcy5maXNoLmRlc2NyaXB0aW9ufTwvdGQ+IDogbnVsbH1cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9XG59XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbkZpc2hUYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIGZpc2g6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5GaXNoVGFibGVSb3cgPSBGaXNoVGFibGVSb3c7Il19