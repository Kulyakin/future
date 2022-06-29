import React from 'react'
import books from '../store/booksStore'

const Pagination = () => {
    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={() => books.loadMore()}
            >
                load more
            </button>
        </div>
    )
}

export default Pagination
