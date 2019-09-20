import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import axios from 'axios'
import CommentItem from './CommentItem'

const CommentList = props => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchComments()
  }, [props.id])

  async function fetchComments() {
    try {
      const { data } = await axios.get(`https://node-hnapi.herokuapp.com/item/${props.id}`)
      setComments(data.comments)
    } catch (_) {}
  }
  console.log(props)
  const { domain, points, time_ago, url, title, user } = props.location.state
  return (
    <div className="news-view">
      <div className="news-list">
        <div className="view">
          <ul>
            <li className="news-item">
              <span className="score">{points}</span>
              <span className="title">
                <a href={url} target="_blank" rel="noopener">
                  {title}
                </a>
                <span className="host"> {domain}</span>
              </span>

              <br />

              <span className="meta">
                <span className="by">
                  by <Link to={`/user/${user}`}>{user}</Link>
                </span>
                <span className="time"> {time_ago}</span>
              </span>
            </li>
          </ul>

          {/* COMMENT ITEM */}

          <h2>Comments</h2>
          <div className="item-view-comments">
            {comments.length === 0 ? (
              <p className="item-view-comments-header">Comments: No comment found.</p>
            ) : (
              <ul className="comment-children">
                {comments.map((comment, idx) => (
                  <CommentItem key={idx} {...comment} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentList
