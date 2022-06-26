import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import ResultsCounter from '../components/simple/ResultsCounter';
import Loader from '../components/simple/Loader';
import books from '../store/books';

const MainPage = observer(() => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        books.startSearch()
        setLoading(false)
    }, [])

    return ( 
        <div>
            <ResultsCounter count={books.foundResults}/>
            {loading ? <Loader/> :
                <BookList/>}
            <Pagination/>
        </div>
     );
})
 
export default MainPage;