import React from 'react'

const Pagination = ({ changePage, page }) => {
  return (
    <div className="news-list-nav">
      <a onClick={() => changePage('prev')}>&lt; Prev</a>
      {page}
      <a onClick={() => changePage('next')}>Next &gt;</a>
    </div>
  )
}

export default Pagination
