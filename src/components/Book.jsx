import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BOOKPAGE_ROUTE } from '../utils/constants'

const Book = ({ bookname, author, categories, img, id }) => {
    const navigate = useNavigate()
    return (
        <div
            className="book"
            onClick={() => navigate(BOOKPAGE_ROUTE + '/' + id)}
        >
            <div className="book__img">
                <img className="book__img-file" src={img} alt="no img" />
            </div>
            <div className="book__bottom">
                <div className="book__bottom-category">{categories}</div>
                <h1 className="book__bottom-name">{bookname.slice(0, 30)}</h1>
                <p className="book__bottom-author">{author}</p>
            </div>
        </div>
    )
}

export default Book
