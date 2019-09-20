import React from 'react'
import { Link } from '@reach/router'

function Card({ title, points, user, id, time_ago, comments_count, url, domain }) {
  return (
    <li className="news-item">
      <span className="score">{points}</span>
      <span className="title">
        <a href={url} target="_blank" rel="noopener">
          {title}
        </a>
        {/* <span className="darkText">{title}</span> */}
        <span className="host"> {domain}</span>
      </span>
      <br />
      <span className="meta">
        {user ? (
          <span className="by">
            by <Link to={`/user/${user}`}>{user}</Link>
          </span>
        ) : (
          ''
        )}
        <span className="time"> {time_ago}</span>
        {comments_count ? (
          <span className="comments-link">
            {' '}
            |{' '}
            <Link to={`/comments/${id}`} state={{ title, points, user, time_ago, url, domain }}>
              comments: {comments_count}
            </Link>
          </span>
        ) : (
          ''
        )}
      </span>
    </li>
  )
}

export default Card
