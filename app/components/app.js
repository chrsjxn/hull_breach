import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hull Breach</h1>
        <ul>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/rules">Rules</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

export default App;
