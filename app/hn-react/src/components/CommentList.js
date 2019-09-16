import React from 'react'
import CommentItem from './CommentItem'

const CommentLIst = () => {
  return (
    <>
      <ul>
        <li class="news-item">
          <span class="score">20</span>
          <span class="title">
            <a href="{{@post.url}}" target="_blank" rel="noopener">
              Title
            </a>
            <span class="host"> post domain</span>
          </span>

          <br />

          <span class="meta">
            <span class="by">
              by{' '}
              <a href="#/user/{{@post.user}}" class="">
                User
              </a>
            </span>
            <span class="time">Time</span>
          </span>
        </li>
      </ul>

      {/* COMMENT ITEM */}

      <h2>Comments</h2>
      <div class="item-view-comments">
        <p class="item-view-comments-header">Comments: No comment found.</p>
        <ul class="comment-children">
          <CommentItem />
        </ul>
      </div>
    </>
  )
}

export default CommentLIst
