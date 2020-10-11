import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <nav>
          <Link to="/play">PLAY</Link>
        <Link to="/scoreboard">Score Board</Link>
       

      </nav>
    )
  }
}

export default NavBar