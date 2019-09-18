import React from 'react'

const Loading = () => {
  return (
    <ul>
      <li className="news-item">
        <span className="score">
          <span className="loading sm"></span>
        </span>
        <span className="title">
          <span className="loading"></span>
        </span>
        <br></br>
        <span className="meta">
          <span className="time">
            <span className="loading md"></span>
          </span>
        </span>
      </li>
    </ul>
  )
}

export default Loading
