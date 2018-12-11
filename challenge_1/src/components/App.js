class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        board: [],
        playerOne: null,
        playerTwo: null,

      };
    }

    componentDidMount() {
        var playerOne = {};
        var playerOneName = prompt("First Player Name?");
        playerOne['name'] = playerOneName;
        playerOne['score'] = 0;

        var playerTwo = {};
        var playerTwoName = prompt("Second Player Name?");
        playerTwo['name'] = playerTwoName;
        playerTwo['score'] = 0;
       
        this.setState({
            board: [],
            playerOne: playerOne,
            playerTwo: playerTwo
          });

        this.resetBoard();
    }

    resetBoard() {

        this.setState({
            board: [[0,0,0],[0,0,0],[0,0,0]],
            playerOne: this.state.playerOne,
            playerTwo: this.state.playerTwo,
            turn: 1
          });

    }
  

    render() {
      return (
          <div>
              <h1>Tic Tac Toe</h1>
              <GameInformation firstPlayer={this.state.playerOne} secondPlayer={this.state.playerTwo} turn={this.state.turn}/>
              
          </div>     
      );
    }
  }
 
  // In the ES6 spec, files are "modules" and do not share a top-level scope
  // `var` declarations will only exist globally where explicitly defined
  window.App = App;