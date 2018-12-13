class Item extends React.Component {
    constructor(props) {
      super(props);

      this.handleInputChange = this.handleInputChange.bind(this);
  
    }

    handleInputChange(e) {
        e.preventDefault();
        this.props.setCart(e);
    }
  
    render() {
      return (
        <div className="item" onClick= {this.handleInputChange.bind(this) }> {this.props.item}</div>
      );
    }
  }
 
  window.Item = Item;
