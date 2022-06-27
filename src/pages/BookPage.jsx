import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookPage = observer(() => {
    const [book, setBook] = useState([])
    const { id } = useParams()
    const [img, setImg] = useState(
        `https://books.google.com/books/content?id=${id}&printsec=frontcover&img=2&zoom=2&edge=curl&source=gbs_api`
    )

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((res) => {
                setBook({ ...res.data })
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((res) => {
                setBook({ ...res.data })
            })
            .catch((error) => console.log(error))
    }, [id])

    return (
        <div className="bookpage">
            <div className="bookpage__left">
                <div className="bookpage__img">
                    <img className="bookpage__img-file" src={img} alt="" />
                </div>
            </div>
            <div className="bookpage__right">
                <div className="bookpage__category">
                    {book.volumeInfo?.categories}
                </div>
                <h1 className="bookpage__name">{book.volumeInfo?.title}</h1>
                <div className="bookpage__author">
                    {book.volumeInfo?.authors?.join(', ')}
                </div>
                <p className="bookpage__description">
                    {book.volumeInfo?.description}
                </p>
            </div>
        </div>
    )
})

export default BookPage
