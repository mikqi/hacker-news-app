import React, { useContext } from 'react'
import { Link } from '@reach/router'
import { PageContext } from '../contexts/PageContext'

const Header = ({ menus }) => {
  const { dispatch } = useContext(PageContext)

  function handleClick(menu) {
    let currentUri = window.location.pathname
    if (!currentUri.includes(menu)) {
      dispatch({ type: 'RESET_PAGE' })
    }
  }

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
            <Link key={idx} to={`/${menu.topic}`} onClick={() => handleClick(menu.topic)}>
              {menu.topic}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
