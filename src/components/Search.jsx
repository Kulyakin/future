import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import books from '../store/books';
import Categories from './Categories';
import SortingBy from './SortingBy';

const Search = observer(() => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            books.startSearch(event, searchValue)
        }
    }

    return ( 
        <header className='header'>
            <h1 className='header__h1'>Search for books</h1>
            <div className='header__search-input'>
                <input className='header__search-input-form'
                    type="text" 
                    placeholder=' Enter name'
                    value={searchValue}
                    onChange={(event) => {setSearchValue(event.target.value)}}
                    onKeyDown={event => handleSearch(event)} />
            </div>
                <div className='header__filter-sort'>
                    <div className='header__categories-filter'>
                        <div>Categories</div>
                        <Categories/>
                    </div>
                    <div className='header__sort'>
                        <div>Sorting by</div>
                        <SortingBy/>
                    </div>
                </div>
        </header>
     );
})
 
export default Search;