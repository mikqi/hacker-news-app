import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserInfo = props => {
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [props.id])

  async function fetchUser() {
    setError(false)
    try {
      // const { data } = await axios.get(`https://api.hnpwa.com/v0/users/${props.id}.json`)
      const { data } = await axios.get(`https://node-hnapi.herokuapp.com/user/${props.id}`)
      setUser(data)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="news-list">
      <div className="view">
        <ul>
          <li className="news-item fadein">
            <h2>ABOUT {props.id}</h2>
            <div className="person">
              <div className="person--avatar">
                <img src={user.avg} />
                <div className="profilePic"></div>
                <br />
                <span className="karma">Karma: {user.karma}</span>
              </div>
              <div className="person--info">
                <h4>ID: {user.id}</h4>
                <h4>created: {user.created}</h4>
                {user.about}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserInfo
