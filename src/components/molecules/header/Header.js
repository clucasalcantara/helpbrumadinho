import React from 'react'
import { array } from 'prop-types'
import { Link } from 'react-router-dom'
// Styles
import './style.scss'

const Header = ({ navItems }) => {
  return (
    <header className="fixed-top hb-header">
      <div className="ui container">
        <a href="/" className="hb-logo">
          Help Brumadinho
        </a>
        <button type="button" className="menu-toggle" id="btnMenu">
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </button>
        <nav className="hb-menu">
          {navItems.map(item => (
            <Link key={item.path} to={item.path} className="item">
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  navItems: array
}

Header.defaultProps = {
  navItems: []
}

export default Header
