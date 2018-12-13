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
    this.reset = this.reset.bind(this);

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

  setCart(arr) {

  }

  setAccount(obj) {

  }

  setShipping(obj) {

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

  reset() {

  }
  

  render() {
    return (
        <div>
          <Shopping setCart={this.setCart} items={this.state.items}/>
          <Account setAccount={this.setAccount} user={this.state.user}/>
          <Shipping setShipping={this.setShipping} address={this.state.address}/>
          <CreditCard setCreditCard={this.setCreditCard} card={this.state.card}/>
          <Checkout checkout={this.checkout} reset={this.reset}/>
        </div>
    );
  }
}

window.App = App;