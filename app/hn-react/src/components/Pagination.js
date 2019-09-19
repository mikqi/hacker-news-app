import React, { useContext } from 'react'
import { PageContext } from '../contexts/PageContext'

const Pagination = props => {
  const { page, menu, dispatch } = useContext(PageContext)

  const maxPages =
    menu.length > 0 ? menu.filter(m => window.location.pathname.includes(m.topic))[0].maxPages : 1
  return (
    <div className="news-list-nav">
      {page <= 1 ? '' : <a onClick={() => dispatch({ type: 'PREV_PAGE' })}>&lt; Prev</a>}
      {page}
      {page < maxPages ? <a onClick={() => dispatch({ type: 'NEXT_PAGE' })}>Next &gt;</a> : ''}
    </div>
  )
}

export default Pagination
