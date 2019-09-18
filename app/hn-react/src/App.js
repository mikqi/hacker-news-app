import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router, Redirect } from '@reach/router'

import Header from './components/Header'
import CommentList from './components/CommentList'
import CardList from './components/CardList'
import UserInfo from './components/UserInfo'
import 'hn-styles/app.css'

function App(props) {
  const [state, setState] = useState({ menus: [] })

  async function fetchMenus() {
    try {
      const { data } = await axios.get('https://api.hnpwa.com/v0')
      const menus = data.endpoints.filter(menu => menu.maxPages)
      setState({ menus })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMenus()
    console.log(props)
  }, [])

  return (
    <>
      <Header menus={state.menus} />
      <div className="news-view">
        <Router>
          <Redirect noThrow from="/" to="news" />
          <CardList path="/:type" />
          <CommentList path="/comments" />
          <UserInfo path="/user/:id" />
        </Router>
      </div>
    </>
  )
}

export default App
