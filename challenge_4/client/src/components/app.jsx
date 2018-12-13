import React from 'react';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      turn: 1,
      player1: '',
      player2: ''
    }
  }

componentDidMount() {
  var player1 = prompt("Frist player name?");
  var player2 = prompt("Second player name?");
  var board = this.emptyBoard();

  this.setState({
      board: board,
      turn: 1,
      player1: player1,
      player2: player2
    });
}

emptyBoard() {
  return [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ];
}

render() {
    return (
      <div className="app">
        <Header player1={this.state.player1} player2={this.state.player2} turn={this.state.turn}/>
        <div className="board">
          <h3>board</h3>
        </div>
      </div>
    );
  }

}

export default App;

