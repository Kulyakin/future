import { observer } from 'mobx-react-lite'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import books from '../store/booksStore'

const SortingBy = observer(() => {
    return (
        <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown__toggle" variant="light">
                {books.sortValue}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown__toggle-menu">
                {books.sortTypes.map((key) => (
                    <Dropdown.Item
                        key={key.id}
                        onClick={() => books.setSortValue(key.type)}
                    >
                        {key.type}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
})

export default SortingBy
