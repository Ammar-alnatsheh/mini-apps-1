class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <h3>hello</h3>
    )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.GameBoard = GameBoard;