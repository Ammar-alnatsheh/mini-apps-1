import React from 'react';
import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
      <div className="board">
          <div className="row">
              <Row row={this.props.board[0]} x='0' setCell={this.props.setCell}/>
          </div>
          <div className="row">
              <Row row={this.props.board[1]} x='1' setCell={this.props.setCell}/>
          </div>
          <div className="row">
              <Row row={this.props.board[2]} x='2' setCell={this.props.setCell}/>
          </div>
          <div className="row">
              <Row row={this.props.board[3]} x='3' setCell={this.props.setCell}/>
          </div>
          <div className="row">
              <Row row={this.props.board[4]} x='4' setCell={this.props.setCell}/>
          </div>
          <div className="row">
              <Row row={this.props.board[5]} x='5' setCell={this.props.setCell}/>
          </div>
      </div>
    );
  }

}

export default Board;
