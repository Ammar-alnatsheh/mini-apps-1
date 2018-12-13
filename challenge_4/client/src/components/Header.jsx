import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
      <div className="header">
        <h3>Game Info</h3>
        <div>
            <label>First Player :</label>
            <input type="text" value={this.props.player1} disabled></input>
            <input type="radio" color="blue" readOnly checked style={{backgroundColor: 'blue'}}></input>
        </div>
        <br></br>
        <div>
            <label>Second Player :</label>
            <input type="text" value={this.props.player2} disabled></input>
            <input type="radio" color="red" readOnly checked style={{backgroundColor: 'red'}}></input>
        </div>
        <br></br>
        <div>
            <label>Game TURN :</label>
            <input type="text" value={ this.props.turn === 1 ? this.props.player1 : this.props.player2 }disabled></input>
        </div>
      </div>
    );
  }

}

export default Header;
