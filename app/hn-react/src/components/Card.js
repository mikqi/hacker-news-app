import React from 'react'

function Card() {
  return (
    <li class="news-item">
      <span class="score">points</span>
      <span class="title">
        <a href="url" target="_blank" rel="noopener">
          title
        </a>
        <span class="darkText">title</span>
        <span class="host">domain</span>
      </span>
      <br />
      <span class="meta">
        <span class="by">
          by{' '}
          <a href="#/user/user" class="">
            user
          </a>
        </span>
        <span class="time">time_ago</span>
        <span class="comments-link">
          {' '}
          |{' '}
          <a href="#/item/id" class="">
            comments
          </a>
        </span>
      </span>
    </li>
  )
}

export default Card
