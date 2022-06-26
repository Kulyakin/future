import React from 'react';
import books from '../store/books';

const BookPage = () => {
    return ( 
        <div className='itempage'>
            <div className='itempage__left'>
                <div className='itempage__img'>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='itempage__right'>
                <div className='itempage__category'>category</div>
                <h1 className='itempage__name'>name</h1>
                <div className='itempage__author'>author</div>
                <p className='itempage__description'>description</p>
            </div>
        </div>
     );
}
 
export default BookPage;