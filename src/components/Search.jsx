import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import books from '../store/booksStore'
import { BOOKLIST_ROUTE } from '../utils/constants'
import Categories from './Categories'
import SortingBy from './SortingBy'

const Search = observer(() => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            books.startSearch(event, searchValue)
        }
    }

    return (
        <header className="header">
            <h1 className="header__h1" onClick={() => navigate(BOOKLIST_ROUTE)}>
                Search for books
            </h1>
            <div className="header__search-input">
                <input
                    className="header__search-input-form"
                    type="text"
                    placeholder=" Enter name"
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value)
                    }}
                    onKeyDown={(event) => handleSearch(event)}
                />
            </div>
            <div className="header__filter-sort">
                <div className="header__categories-filter">
                    <div>Categories</div>
                    <Categories />
                </div>
                <div className="header__sort">
                    <div>Sorting by</div>
                    <SortingBy />
                </div>
            </div>
        </header>
    )
})

export default Search
