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
    _this.reset = _this.reset.bind(_this);

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
    value: function setCart(arr) {}
  }, {
    key: 'setAccount',
    value: function setAccount(obj) {}
  }, {
    key: 'setShipping',
    value: function setShipping(obj) {}
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
    key: 'reset',
    value: function reset() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Shopping, { setCart: this.setCart, items: this.state.items }),
        React.createElement(Account, { setAccount: this.setAccount, user: this.state.user }),
        React.createElement(Shipping, { setShipping: this.setShipping, address: this.state.address }),
        React.createElement(CreditCard, { setCreditCard: this.setCreditCard, card: this.state.card }),
        React.createElement(Checkout, { checkout: this.checkout, reset: this.reset })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIml0ZW1zIiwiY2FydCIsInVzZXIiLCJhZGRyZXNzIiwiY2FyZCIsImdldEl0ZW1zIiwiYmluZCIsInNldENhcnQiLCJzZXRBY2NvdW50Iiwic2V0U2hpcHBpbmciLCJzZXRDcmVkaXRDYXJkIiwiY2hlY2tvdXQiLCJyZXNldCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXJyIiwib2JqIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2F0Y2giLCJhbGVydCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxZQUFNLEVBRks7QUFHWEMsWUFBTSxFQUhLO0FBSVhDLGVBQVMsRUFKRTtBQUtYQyxZQUFNO0FBTEssS0FBYjs7QUFRQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFELElBQWIsT0FBZjtBQUNBLFVBQUtFLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkYsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJILElBQWpCLE9BQW5CO0FBQ0EsVUFBS0ksYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSixJQUFuQixPQUFyQjtBQUNBLFVBQUtLLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjTCxJQUFkLE9BQWhCO0FBQ0EsVUFBS00sS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV04sSUFBWCxPQUFiOztBQWpCaUI7QUFtQmxCOzs7O3dDQUVtQjtBQUNsQixXQUFLRCxRQUFMO0FBQ0Q7OzsrQkFFVTtBQUFBOztBQUNUO0FBQ0E7QUFDQVEsWUFBTSxRQUFOLEVBQ0NDLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYixlQUFPQSxJQUFJQyxJQUFKLEVBQVA7QUFDRCxPQUhELEVBSUNGLElBSkQsQ0FJTSxnQkFBUTtBQUNaLGVBQUtHLFFBQUwsQ0FBYztBQUNaakIsaUJBQU9rQixJQURLO0FBRVpqQixnQkFBTSxFQUZNO0FBR1pDLGdCQUFNLEVBSE07QUFJWkMsbUJBQVMsRUFKRztBQUtaQyxnQkFBTTtBQUxNLFNBQWQ7QUFPQWUsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELE9BYkQ7QUFjRDs7OzRCQUVPRyxHLEVBQUssQ0FFWjs7OytCQUVVQyxHLEVBQUssQ0FFZjs7O2dDQUVXQSxHLEVBQUssQ0FFaEI7OztrQ0FFYUEsRyxFQUFLLENBRWxCOzs7K0JBRVU7QUFDVFQsWUFBTSxXQUFOLEVBQW1CO0FBQ2pCVSxnQkFBUSxNQURTO0FBRWpCQyxpQkFBUztBQUNMLDBCQUFnQjtBQURYLFNBRlE7QUFLakJDLGNBQU1DLEtBQUtDLFNBQUwsQ0FBZSxLQUFLNUIsS0FBcEI7QUFMVyxPQUFuQixFQU9DNkIsS0FQRCxDQU9PLGlCQUFTO0FBQ2RDLGNBQU0scUNBQU47QUFDRCxPQVREO0FBVUQ7Ozs0QkFFTyxDQUVQOzs7NkJBR1E7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFFBQUQsSUFBVSxTQUFTLEtBQUt0QixPQUF4QixFQUFpQyxPQUFPLEtBQUtSLEtBQUwsQ0FBV0MsS0FBbkQsR0FERjtBQUVFLDRCQUFDLE9BQUQsSUFBUyxZQUFZLEtBQUtRLFVBQTFCLEVBQXNDLE1BQU0sS0FBS1QsS0FBTCxDQUFXRyxJQUF2RCxHQUZGO0FBR0UsNEJBQUMsUUFBRCxJQUFVLGFBQWEsS0FBS08sV0FBNUIsRUFBeUMsU0FBUyxLQUFLVixLQUFMLENBQVdJLE9BQTdELEdBSEY7QUFJRSw0QkFBQyxVQUFELElBQVksZUFBZSxLQUFLTyxhQUFoQyxFQUErQyxNQUFNLEtBQUtYLEtBQUwsQ0FBV0ssSUFBaEUsR0FKRjtBQUtFLDRCQUFDLFFBQUQsSUFBVSxVQUFVLEtBQUtPLFFBQXpCLEVBQW1DLE9BQU8sS0FBS0MsS0FBL0M7QUFMRixPQURKO0FBU0Q7Ozs7RUF6RmVrQixNQUFNQyxTOztBQTRGeEJDLE9BQU9uQyxHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgY2FydDogW10sXG4gICAgICB1c2VyOiB7fSxcbiAgICAgIGFkZHJlc3M6IHt9LFxuICAgICAgY2FyZDoge31cbiAgICB9XG5cbiAgICB0aGlzLmdldEl0ZW1zID0gdGhpcy5nZXRJdGVtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Q2FydCA9IHRoaXMuc2V0Q2FydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0QWNjb3VudCA9IHRoaXMuc2V0QWNjb3VudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2hpcHBpbmcgPSB0aGlzLnNldFNoaXBwaW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRDcmVkaXRDYXJkID0gdGhpcy5zZXRDcmVkaXRDYXJkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja291dCA9IHRoaXMuY2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0ID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldEl0ZW1zKCk7XG4gIH1cblxuICBnZXRJdGVtcygpIHtcbiAgICAvLyBmZXRjaCBtZXRob2QgcmV0dXJuIGEgcHJvbWlzcyBhbmQgc2luY2Ugd2UgZG9udCBnaXZlIGl0IGEgd2Vic2lkZVxuICAgIC8vIGFkcmVzcyB0aGUgJy8nIGJlZm9yZSBncm9jZXJpZXMgdGVsbCBmZXRjaCBpdHMgYSBsb2NhbCB3ZWJzaXRlIFxuICAgIGZldGNoKCcvaXRlbXMnKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXRlbXM6IGRhdGEsXG4gICAgICAgIGNhcnQ6IFtdLFxuICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgYWRkcmVzczoge30sXG4gICAgICAgIGNhcmQ6IHt9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0Q2FydChhcnIpIHtcblxuICB9XG5cbiAgc2V0QWNjb3VudChvYmopIHtcblxuICB9XG5cbiAgc2V0U2hpcHBpbmcob2JqKSB7XG5cbiAgfVxuXG4gIHNldENyZWRpdENhcmQob2JqKSB7XG5cbiAgfVxuXG4gIGNoZWNrb3V0KCkge1xuICAgIGZldGNoKCcvY2hlY2tvdXQnLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgYWxlcnQoJ1NlcnZlciBjYW50IGNvbXBsZXRlIHRoZSByZXF1ZXN0IDooJyk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcblxuICB9XG4gIFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTaG9wcGluZyBzZXRDYXJ0PXt0aGlzLnNldENhcnR9IGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfS8+XG4gICAgICAgICAgPEFjY291bnQgc2V0QWNjb3VudD17dGhpcy5zZXRBY2NvdW50fSB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9Lz5cbiAgICAgICAgICA8U2hpcHBpbmcgc2V0U2hpcHBpbmc9e3RoaXMuc2V0U2hpcHBpbmd9IGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc30vPlxuICAgICAgICAgIDxDcmVkaXRDYXJkIHNldENyZWRpdENhcmQ9e3RoaXMuc2V0Q3JlZGl0Q2FyZH0gY2FyZD17dGhpcy5zdGF0ZS5jYXJkfS8+XG4gICAgICAgICAgPENoZWNrb3V0IGNoZWNrb3V0PXt0aGlzLmNoZWNrb3V0fSByZXNldD17dGhpcy5yZXNldH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19