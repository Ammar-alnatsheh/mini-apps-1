class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      cart: [],
      user: {},
      address: {},
      card: {}
    }

    this.getItems = this.getItems.bind(this);
    this.setCart = this.setCart.bind(this);
    this.setAccount = this.setAccount.bind(this);
    this.setShipping = this.setShipping.bind(this);
    this.setCreditCard = this.setCreditCard.bind(this);
    this.checkout = this.checkout.bind(this);

  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    // fetch method return a promiss and since we dont give it a webside
    // adress the '/' before groceries tell fetch its a local website 
    fetch('/items')
    .then((res) => {
      return res.json();
    })
    .then(data => {
      this.setState({
        items: data,
        cart: [],
        user: {},
        address: {},
        card: {}
      });
      console.log(data);
    });
  }

  setCart(e) {
    var a = e.target;
    console.log(a.val);
  }

  setAccount(obj) {

  }

  setShipping(obj) {
    console.log("next");

  }

  setCreditCard(obj) {

  }

  checkout() {
    fetch('/checkout', {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state)
    })
    .catch(error => {
      alert('Server cant complete the request :(');
    });
  }
  

  render() {
    return (
        <div>
          <Shopping setCart={this.setCart} items={this.state.items}/>
          <Account setAccount={this.setAccount}/>
          <Shipping setShipping={this.setShipping}/>
          <CreditCard setCreditCard={this.setCreditCard}/>
          <Checkout checkout={this.checkout} items={this.state.cart}/>
        </div>
    );
  }
}

window.App = App;