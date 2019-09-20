import React from 'react'
import { Link } from '@reach/router'

const Comment = ({ comment }) => {
  return (
    <ul className="comment-children">
      <div className="by">
        <Link to={`/user/${comment.user}`}>{comment.user}</Link> - {comment.time_ago}
      </div>
      <div className="text">
        <span dangerouslySetInnerHTML={{ __html: comment.content }}></span>
      </div>
      <div className="toggle"></div>
      {comment.comments.length > 0
        ? comment.comments.map(c => <Comment key={c.id} comment={c} />)
        : ''}
    </ul>
  )
}

const CommentItem = ({ comments, content, id, time_ago, user }) => {
  return (
    <li className="comment">
      <div className="by">
        <Link to={`/user/${user}`}>{user} </Link>
        {time_ago}
      </div>
      <div className="text">
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </div>
      <div className="toggle">
        <a>[-]</a>
      </div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </li>
  )
}

export default CommentItem
