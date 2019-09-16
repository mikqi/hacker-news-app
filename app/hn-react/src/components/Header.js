import React from 'react'

const Header = () => {
  return (
    <header className="header" style={{ backgroundColor: '#333' }}>
      <nav className="inner">
        <div className="container-logo">
          <a>
            <span>React HN</span>
          </a>
        </div>
        <div className="fadein">
          <a>Link</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
