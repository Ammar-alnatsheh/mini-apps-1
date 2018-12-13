'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      items: [],
      cart: [],
      user: {},
      address: {},
      card: {}
    };

    _this.getItems = _this.getItems.bind(_this);
    _this.setCart = _this.setCart.bind(_this);
    _this.setAccount = _this.setAccount.bind(_this);
    _this.setShipping = _this.setShipping.bind(_this);
    _this.setCreditCard = _this.setCreditCard.bind(_this);
    _this.checkout = _this.checkout.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getItems();
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var _this2 = this;

      // fetch method return a promiss and since we dont give it a webside
      // adress the '/' before groceries tell fetch its a local website 
      fetch('/items').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          items: data,
          cart: [],
          user: {},
          address: {},
          card: {}
        });
        console.log(data);
      });
    }
  }, {
    key: 'setCart',
    value: function setCart(e) {
      var a = e.target;
      console.log(a.val);
    }
  }, {
    key: 'setAccount',
    value: function setAccount(obj) {}
  }, {
    key: 'setShipping',
    value: function setShipping(obj) {
      console.log("next");
    }
  }, {
    key: 'setCreditCard',
    value: function setCreditCard(obj) {}
  }, {
    key: 'checkout',
    value: function checkout() {
      fetch('/checkout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(this.state)
      }).catch(function (error) {
        alert('Server cant complete the request :(');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Shopping, { setCart: this.setCart, items: this.state.items }),
        React.createElement(Account, { setAccount: this.setAccount }),
        React.createElement(Shipping, { setShipping: this.setShipping }),
        React.createElement(CreditCard, { setCreditCard: this.setCreditCard }),
        React.createElement(Checkout, { checkout: this.checkout, items: this.state.cart })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIml0ZW1zIiwiY2FydCIsInVzZXIiLCJhZGRyZXNzIiwiY2FyZCIsImdldEl0ZW1zIiwiYmluZCIsInNldENhcnQiLCJzZXRBY2NvdW50Iiwic2V0U2hpcHBpbmciLCJzZXRDcmVkaXRDYXJkIiwiY2hlY2tvdXQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImUiLCJhIiwidGFyZ2V0IiwidmFsIiwib2JqIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2F0Y2giLCJhbGVydCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxZQUFNLEVBRks7QUFHWEMsWUFBTSxFQUhLO0FBSVhDLGVBQVMsRUFKRTtBQUtYQyxZQUFNO0FBTEssS0FBYjs7QUFRQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkYsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJILElBQWpCLE9BQW5CO0FBQ0EsVUFBS0ksYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSixJQUFuQixPQUFyQjtBQUNBLFVBQUtLLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjTCxJQUFkLE9BQWhCOztBQWhCaUI7QUFrQmxCOzs7O3dDQUVtQjtBQUNsQixXQUFLRCxRQUFMO0FBQ0Q7OzsrQkFFVTtBQUFBOztBQUNUO0FBQ0E7QUFDQU8sWUFBTSxRQUFOLEVBQ0NDLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYixlQUFPQSxJQUFJQyxJQUFKLEVBQVA7QUFDRCxPQUhELEVBSUNGLElBSkQsQ0FJTSxnQkFBUTtBQUNaLGVBQUtHLFFBQUwsQ0FBYztBQUNaaEIsaUJBQU9pQixJQURLO0FBRVpoQixnQkFBTSxFQUZNO0FBR1pDLGdCQUFNLEVBSE07QUFJWkMsbUJBQVMsRUFKRztBQUtaQyxnQkFBTTtBQUxNLFNBQWQ7QUFPQWMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELE9BYkQ7QUFjRDs7OzRCQUVPRyxDLEVBQUc7QUFDVCxVQUFJQyxJQUFJRCxFQUFFRSxNQUFWO0FBQ0FKLGNBQVFDLEdBQVIsQ0FBWUUsRUFBRUUsR0FBZDtBQUNEOzs7K0JBRVVDLEcsRUFBSyxDQUVmOzs7Z0NBRVdBLEcsRUFBSztBQUNmTixjQUFRQyxHQUFSLENBQVksTUFBWjtBQUVEOzs7a0NBRWFLLEcsRUFBSyxDQUVsQjs7OytCQUVVO0FBQ1RaLFlBQU0sV0FBTixFQUFtQjtBQUNqQmEsZ0JBQVEsTUFEUztBQUVqQkMsaUJBQVM7QUFDTCwwQkFBZ0I7QUFEWCxTQUZRO0FBS2pCQyxjQUFNQyxLQUFLQyxTQUFMLENBQWUsS0FBSzlCLEtBQXBCO0FBTFcsT0FBbkIsRUFPQytCLEtBUEQsQ0FPTyxpQkFBUztBQUNkQyxjQUFNLHFDQUFOO0FBQ0QsT0FURDtBQVVEOzs7NkJBR1E7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFFBQUQsSUFBVSxTQUFTLEtBQUt4QixPQUF4QixFQUFpQyxPQUFPLEtBQUtSLEtBQUwsQ0FBV0MsS0FBbkQsR0FERjtBQUVFLDRCQUFDLE9BQUQsSUFBUyxZQUFZLEtBQUtRLFVBQTFCLEdBRkY7QUFHRSw0QkFBQyxRQUFELElBQVUsYUFBYSxLQUFLQyxXQUE1QixHQUhGO0FBSUUsNEJBQUMsVUFBRCxJQUFZLGVBQWUsS0FBS0MsYUFBaEMsR0FKRjtBQUtFLDRCQUFDLFFBQUQsSUFBVSxVQUFVLEtBQUtDLFFBQXpCLEVBQW1DLE9BQU8sS0FBS1osS0FBTCxDQUFXRSxJQUFyRDtBQUxGLE9BREo7QUFTRDs7OztFQXRGZStCLE1BQU1DLFM7O0FBeUZ4QkMsT0FBT3JDLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBjYXJ0OiBbXSxcbiAgICAgIHVzZXI6IHt9LFxuICAgICAgYWRkcmVzczoge30sXG4gICAgICBjYXJkOiB7fVxuICAgIH1cblxuICAgIHRoaXMuZ2V0SXRlbXMgPSB0aGlzLmdldEl0ZW1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRDYXJ0ID0gdGhpcy5zZXRDYXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRBY2NvdW50ID0gdGhpcy5zZXRBY2NvdW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRTaGlwcGluZyA9IHRoaXMuc2V0U2hpcHBpbmcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldENyZWRpdENhcmQgPSB0aGlzLnNldENyZWRpdENhcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrb3V0ID0gdGhpcy5jaGVja291dC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW1zKCk7XG4gIH1cblxuICBnZXRJdGVtcygpIHtcbiAgICAvLyBmZXRjaCBtZXRob2QgcmV0dXJuIGEgcHJvbWlzcyBhbmQgc2luY2Ugd2UgZG9udCBnaXZlIGl0IGEgd2Vic2lkZVxuICAgIC8vIGFkcmVzcyB0aGUgJy8nIGJlZm9yZSBncm9jZXJpZXMgdGVsbCBmZXRjaCBpdHMgYSBsb2NhbCB3ZWJzaXRlIFxuICAgIGZldGNoKCcvaXRlbXMnKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXRlbXM6IGRhdGEsXG4gICAgICAgIGNhcnQ6IFtdLFxuICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgYWRkcmVzczoge30sXG4gICAgICAgIGNhcmQ6IHt9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0Q2FydChlKSB7XG4gICAgdmFyIGEgPSBlLnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhhLnZhbCk7XG4gIH1cblxuICBzZXRBY2NvdW50KG9iaikge1xuXG4gIH1cblxuICBzZXRTaGlwcGluZyhvYmopIHtcbiAgICBjb25zb2xlLmxvZyhcIm5leHRcIik7XG5cbiAgfVxuXG4gIHNldENyZWRpdENhcmQob2JqKSB7XG5cbiAgfVxuXG4gIGNoZWNrb3V0KCkge1xuICAgIGZldGNoKCcvY2hlY2tvdXQnLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgYWxlcnQoJ1NlcnZlciBjYW50IGNvbXBsZXRlIHRoZSByZXF1ZXN0IDooJyk7XG4gICAgfSk7XG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNob3BwaW5nIHNldENhcnQ9e3RoaXMuc2V0Q2FydH0gaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9Lz5cbiAgICAgICAgICA8QWNjb3VudCBzZXRBY2NvdW50PXt0aGlzLnNldEFjY291bnR9Lz5cbiAgICAgICAgICA8U2hpcHBpbmcgc2V0U2hpcHBpbmc9e3RoaXMuc2V0U2hpcHBpbmd9Lz5cbiAgICAgICAgICA8Q3JlZGl0Q2FyZCBzZXRDcmVkaXRDYXJkPXt0aGlzLnNldENyZWRpdENhcmR9Lz5cbiAgICAgICAgICA8Q2hlY2tvdXQgY2hlY2tvdXQ9e3RoaXMuY2hlY2tvdXR9IGl0ZW1zPXt0aGlzLnN0YXRlLmNhcnR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==