class Shipping extends React.Component {
    constructor(props) {
      super(props);
      
    }
  
    handleInputChange(e) {
      e.preventDefault();
      this.props.setShipping();
    }
  
    render() {
      return (
        <form onSubmit={this.handleInputChange}>
        <h2>Shipping form</h2>
        <div>
          Line 1:<input type="text" name="line1"></input>
        </div>
        <div>
          Line 2:<input type="text" name="line2" ></input>
        </div>
        <div>
          City:<input type="text" name="city" ></input>
        </div>
        <div>
          State:<input type="text" name="state" ></input>
        </div>
        <div>
          Zip Code:<input type="number" name="zipcode" ></input>
        </div>
        <div>
          Phone #:<input type="tel" name="phone" ></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
      );
    }
  }
 
  window.Shipping = Shipping;