class CreditCard extends React.Component {
    constructor(props) {
      super(props);
  
    }

    handleInputChange(e) {
      e.preventDefault();
      this.props.setCreditCard();
    }
  
    render() {
      return (
        <form onSubmit={this.handleInputChange}>
          <h2>Credit Card Form</h2>
          <div>
            Credit Card #:<input type="number" name="Cardnumber" placeholder="12345"></input>
          </div>
          <div>
            Exp-date:<input type="date" name="ExpDate" placeholder="MM/YYYY"></input>
          </div>
          <div>
            CVV:<input type="number" name="email" placeholder=""></input>
          </div>
          <div>
            Zip Code:<input type="number" name="email" placeholder=""></input>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      );
    }
  }

  window.CreditCard = CreditCard;