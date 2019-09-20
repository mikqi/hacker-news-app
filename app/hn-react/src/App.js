import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Router, Redirect } from '@reach/router'

import { PageContext } from './contexts/PageContext'

import Header from './components/Header'
import CommentList from './components/CommentList'
import CardList from './components/CardList'
import UserInfo from './components/UserInfo'
import 'hn-styles/app.css'

function App() {
  const { menu, dispatch } = useContext(PageContext)

  async function fetchMenus() {
    try {
      const { data } = await axios.get('https://api.hnpwa.com/v0')
      const menus = data.endpoints.filter(menu => menu.maxPages)
      dispatch({
        type: 'SET_MENU',
        payload: menus
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMenus()
  }, [])

  return (
    <>
      <Header menus={menu} />
      <div className="news-view">
        <Router>
          <Redirect noThrow from="/" to="news" />
          <CardList path="/:type" />
          <CommentList path="/comments/:id" />
          <UserInfo path="/user/:id" />
        </Router>
      </div>
    </>
  )
}

export default App
