import React from 'react'

const CommentItem = () => {
  return (
    <li class="comment">
      <div class="by">
        <a href="#/user/{{@comment.user}}" class="">
          user
        </a>
        timeago
      </div>
      <div class="text"> Content </div>
      <div class="toggle">
        <a>[-]</a>
      </div>
      <ul class="comment-children">comments</ul>
    </li>
  )
}

export default CommentItem
