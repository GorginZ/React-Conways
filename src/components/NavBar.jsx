import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <nav>
          <Link to="/life">Life</Link>
        <Link to="/patterns">Life Patterns</Link>
       

      </nav>
    )
  }
}

export default NavBar