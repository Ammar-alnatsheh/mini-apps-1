class Checkout extends React.Component {

  constructor(props) {
    super(props);

  }

  handleInputChange(e) {
    e.preventDefault();
    this.props.checkout();
  }

  render() {

      return (
        <form onSubmit={this.handleInputChange}>
          <h2>Checkout Form</h2>
          {this.props.items.map( item => (
          <Item item={item.name} key={item.id}/>
          ))}
          <div>
          <input type="submit" value="Submit"></input>
          </div>
        </form>
      );
  }
}
 
window.Checkout = Checkout;