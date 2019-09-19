import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { PageContext } from '../contexts/PageContext'
import Card from './Card'
import Pagination from './Pagination'
import Loading from './Loading'

const CardList = ({ type }) => {
  const { news, loading, page, dispatch } = useContext(PageContext)

  useEffect(() => {
    fetchNews()
      .then(({ data }) => {
        dispatch({ type: 'TOGGLE_LOADING' })
        dispatch({ type: 'SET_NEWS', payload: data })
      })
      .catch(err => {
        dispatch({ type: 'TOGGLE_LOADING' })
        throw new Error(err)
      })
  }, [type, page])

  async function fetchNews() {
    dispatch({ type: 'TOGGLE_LOADING' })
    return await axios.get(`https://api.hnpwa.com/v0/${type}/${page}.json`)
  }

  return (
    <>
      <Pagination />
      <div className="news-list">
        <div className="view">
          {loading ? <Loading /> : news.map(n => <Card key={n.id} {...n} />)}
        </div>
      </div>
    </>
  )
}

export default CardList
