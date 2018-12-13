class Account extends React.Component {
    constructor(props) {
      super(props);
  
    }

    handleInputChange(e) {
      e.preventDefault();
      this.props.setAccount();
    }
  
    render() {
      return (
        <form onSubmit={this.handleInputChange}>
          <h2>Account form</h2>
          <div>
            Name:<input type="text" name="name" placeholder="Mickey"></input>
          </div>
          <div>
            Password:<input type="password" name="password" placeholder="********"></input>
          </div>
          <div>
            Email:<input type="email" name="email" placeholder="example@HR.com"></input>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      );
    }
  }
  
  window.Account = Account;