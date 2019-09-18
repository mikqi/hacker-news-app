import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import Pagination from './Pagination'

const CardList = ({ type }) => {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchNews()
      .then(({ data }) => setNews(data))
      .catch(err => new Error(err))
  }, [type, page])

  async function fetchNews() {
    return await axios.get(`https://api.hnpwa.com/v0/${type}/${page}.json`)
  }

  function changePage(state) {
    if (state === 'next') {
      setPage(page + 1)
    } else if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <Pagination page={page} changePage={changePage} />
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
