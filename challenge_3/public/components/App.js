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
      // fetch('/checkout', {
      //   method: "POST",
      //   headers: {
      //       "Content-Type": "application/json; charset=utf-8",
      //   },
      //   body: JSON.stringify(this.state)
      // })
      // .then(()=>{
      //   this.getItems();
      // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIml0ZW1zIiwiY2FydCIsInVzZXIiLCJhZGRyZXNzIiwiY2FyZCIsImdldEl0ZW1zIiwiYmluZCIsInNldENhcnQiLCJzZXRBY2NvdW50Iiwic2V0U2hpcHBpbmciLCJzZXRDcmVkaXRDYXJkIiwiY2hlY2tvdXQiLCJyZXNldCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXJyIiwib2JqIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLFlBQU0sRUFGSztBQUdYQyxZQUFNLEVBSEs7QUFJWEMsZUFBUyxFQUpFO0FBS1hDLFlBQU07QUFMSyxLQUFiOztBQVFBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRixJQUFoQixPQUFsQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7QUFDQSxVQUFLSSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJKLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ssUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNMLElBQWQsT0FBaEI7QUFDQSxVQUFLTSxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXTixJQUFYLE9BQWI7O0FBakJpQjtBQW1CbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtELFFBQUw7QUFDRDs7OytCQUVVO0FBQUE7O0FBQ1Q7QUFDQTtBQUNBUSxZQUFNLFFBQU4sRUFDQ0MsSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUztBQUNiLGVBQU9BLElBQUlDLElBQUosRUFBUDtBQUNELE9BSEQsRUFJQ0YsSUFKRCxDQUlNLGdCQUFRO0FBQ1osZUFBS0csUUFBTCxDQUFjO0FBQ1pqQixpQkFBT2tCLElBREs7QUFFWmpCLGdCQUFNLEVBRk07QUFHWkMsZ0JBQU0sRUFITTtBQUlaQyxtQkFBUyxFQUpHO0FBS1pDLGdCQUFNO0FBTE0sU0FBZDtBQU9BZSxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0QsT0FiRDtBQWNEOzs7NEJBRU9HLEcsRUFBSyxDQUVaOzs7K0JBRVVDLEcsRUFBSyxDQUVmOzs7Z0NBRVdBLEcsRUFBSyxDQUVoQjs7O2tDQUVhQSxHLEVBQUssQ0FFbEI7OzsrQkFFVTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs0QkFFTyxDQUVQOzs7NkJBR1E7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFFBQUQsSUFBVSxTQUFTLEtBQUtmLE9BQXhCLEVBQWlDLE9BQU8sS0FBS1IsS0FBTCxDQUFXQyxLQUFuRCxHQURGO0FBRUUsNEJBQUMsT0FBRCxJQUFTLFlBQVksS0FBS1EsVUFBMUIsRUFBc0MsTUFBTSxLQUFLVCxLQUFMLENBQVdHLElBQXZELEdBRkY7QUFHRSw0QkFBQyxRQUFELElBQVUsYUFBYSxLQUFLTyxXQUE1QixFQUF5QyxTQUFTLEtBQUtWLEtBQUwsQ0FBV0ksT0FBN0QsR0FIRjtBQUlFLDRCQUFDLFVBQUQsSUFBWSxlQUFlLEtBQUtPLGFBQWhDLEVBQStDLE1BQU0sS0FBS1gsS0FBTCxDQUFXSyxJQUFoRSxHQUpGO0FBS0UsNEJBQUMsUUFBRCxJQUFVLFVBQVUsS0FBS08sUUFBekIsRUFBbUMsT0FBTyxLQUFLQyxLQUEvQztBQUxGLE9BREo7QUFTRDs7OztFQXpGZVcsTUFBTUMsUzs7QUE0RnhCQyxPQUFPNUIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIGNhcnQ6IFtdLFxuICAgICAgdXNlcjoge30sXG4gICAgICBhZGRyZXNzOiB7fSxcbiAgICAgIGNhcmQ6IHt9XG4gICAgfVxuXG4gICAgdGhpcy5nZXRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldENhcnQgPSB0aGlzLnNldENhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldEFjY291bnQgPSB0aGlzLnNldEFjY291bnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFNoaXBwaW5nID0gdGhpcy5zZXRTaGlwcGluZy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Q3JlZGl0Q2FyZCA9IHRoaXMuc2V0Q3JlZGl0Q2FyZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tvdXQgPSB0aGlzLmNoZWNrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRJdGVtcygpO1xuICB9XG5cbiAgZ2V0SXRlbXMoKSB7XG4gICAgLy8gZmV0Y2ggbWV0aG9kIHJldHVybiBhIHByb21pc3MgYW5kIHNpbmNlIHdlIGRvbnQgZ2l2ZSBpdCBhIHdlYnNpZGVcbiAgICAvLyBhZHJlc3MgdGhlICcvJyBiZWZvcmUgZ3JvY2VyaWVzIHRlbGwgZmV0Y2ggaXRzIGEgbG9jYWwgd2Vic2l0ZSBcbiAgICBmZXRjaCgnL2l0ZW1zJylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1zOiBkYXRhLFxuICAgICAgICBjYXJ0OiBbXSxcbiAgICAgICAgdXNlcjoge30sXG4gICAgICAgIGFkZHJlc3M6IHt9LFxuICAgICAgICBjYXJkOiB7fVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldENhcnQoYXJyKSB7XG5cbiAgfVxuXG4gIHNldEFjY291bnQob2JqKSB7XG5cbiAgfVxuXG4gIHNldFNoaXBwaW5nKG9iaikge1xuXG4gIH1cblxuICBzZXRDcmVkaXRDYXJkKG9iaikge1xuXG4gIH1cblxuICBjaGVja291dCgpIHtcbiAgICAvLyBmZXRjaCgnL2NoZWNrb3V0Jywge1xuICAgIC8vICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKVxuICAgIC8vIH0pXG4gICAgLy8gLnRoZW4oKCk9PntcbiAgICAvLyAgIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuXG4gIH1cbiAgXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNob3BwaW5nIHNldENhcnQ9e3RoaXMuc2V0Q2FydH0gaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9Lz5cbiAgICAgICAgICA8QWNjb3VudCBzZXRBY2NvdW50PXt0aGlzLnNldEFjY291bnR9IHVzZXI9e3RoaXMuc3RhdGUudXNlcn0vPlxuICAgICAgICAgIDxTaGlwcGluZyBzZXRTaGlwcGluZz17dGhpcy5zZXRTaGlwcGluZ30gYWRkcmVzcz17dGhpcy5zdGF0ZS5hZGRyZXNzfS8+XG4gICAgICAgICAgPENyZWRpdENhcmQgc2V0Q3JlZGl0Q2FyZD17dGhpcy5zZXRDcmVkaXRDYXJkfSBjYXJkPXt0aGlzLnN0YXRlLmNhcmR9Lz5cbiAgICAgICAgICA8Q2hlY2tvdXQgY2hlY2tvdXQ9e3RoaXMuY2hlY2tvdXR9IHJlc2V0PXt0aGlzLnJlc2V0fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkFwcCA9IEFwcDsiXX0=