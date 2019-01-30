import React, { useState } from 'react'
import { array } from 'prop-types'
import { Link } from 'react-router-dom'
// UI Elements
import { Button } from 'components/atoms'

// Styles
import './style.scss'

const Header = ({ navItems }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`fixed-top hb-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="ui container">
        <a href="/" className="hb-logo">
          Help Brumadinho
        </a>
        <Button
          className="menu-toggle"
          handleClick={() => setMenuOpen(!isMenuOpen)}
        >
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </Button>
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
