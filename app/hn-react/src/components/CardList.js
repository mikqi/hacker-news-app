import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { PageContext } from '../contexts/PageContext'
import Card from './Card'
import Pagination from './Pagination'

const CardList = ({ type }) => {
  const { news, page, dispatch } = useContext(PageContext)

  useEffect(() => {
    fetchNews()
      .then(({ data }) => dispatch({ type: 'SET_NEWS', payload: data }))
      .catch(err => new Error(err))
  }, [type, page])

  async function fetchNews() {
    return await axios.get(`https://api.hnpwa.com/v0/${type}/${page}.json`)
  }

  return (
    <>
      <Pagination />
      <div className="news-list">
        <div className="view">
          {news.map(n => (
            <Card key={n.id} {...n} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CardList
