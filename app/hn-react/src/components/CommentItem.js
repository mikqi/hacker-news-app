import React from 'react'

const CommentItem = () => {
  return (
    <li className="comment">
      <div className="by">
        <a href="#/user/{{@comment.user}}" className="">
          user
        </a>
        timeago
      </div>
      <div className="text"> Content </div>
      <div className="toggle">
        <a>[-]</a>
      </div>
      <ul className="comment-children">comments</ul>
    </li>
  )
}

export default CommentItem
