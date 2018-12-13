class Shopping extends React.Component {
    constructor(props) {
      super(props);
  
    }

    handleInputChange(e) {
      e.preventDefault();
      this.props.setCart(this.state.items);
    }

    addItem(e) {
      e.preventDefault();
      this.setState({
        items: this.state.item.push(e.target.val)
      });

    }
  
    render() {

        return (
          <form onSubmit={this.handleInputChange}>
            <h2>Shopping Form</h2>
            {this.props.items.map( item => (
            <Item item={item.name} key={item.id} addItem={this.addItem.bind(this)}/>
            ))}
            <div>
            <input type="submit" value="Submit"></input>
            </div>
          </form>
        );
    }
  }
  
  window.Shopping = Shopping;