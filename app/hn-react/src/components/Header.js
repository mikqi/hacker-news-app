import React from 'react'
import { Link } from '@reach/router'

const Header = ({ menus }) => {
  return (
    <header className="header" style={{ backgroundColor: '#333' }}>
      <nav className="inner">
        <div className="container-logo">
          <a>
            <span>React HN</span>
          </a>
        </div>
        <div className="fadein">
          {menus.map((menu, idx) => (
            <Link key={idx} to={`/${menu.topic}`}>
              {menu.topic}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
