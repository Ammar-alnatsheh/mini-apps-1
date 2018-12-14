import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

render() {

    var cells = this.props.row.map((cell, idx)=> {
              if ( cell === 0 ) {
                  // return empty cell
                  return (<div id="white" className={[this.props.x,idx]} onClick={this.props.setCell} >[white]</div>);

              } else if ( cell === 1 ) {
                  // return blue stone
                  return (<div id="blue" >[blue ]</div>);

              }else if ( cell === 2 ) {
                  // return red stone
                  return (<div id="red" >[ red ]</div>);

              }
          });

    return (
      <div className="row">
          {cells}
      </div>
    );
  }

}

export default Row;