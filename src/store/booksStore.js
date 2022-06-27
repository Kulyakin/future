import { makeAutoObservable, autorun } from 'mobx'
import axios from 'axios'

class Books {
    books = []
    sortTypes = [
        { id: 1, type: 'relevance' },
        { id: 2, type: 'newest' }
    ]

    filterValue = ''
    categories = [
        { id: 1, type: 'all' },
        { id: 2, type: 'art' },
        { id: 3, type: 'biography' },
        { id: 4, type: 'computers' },
        { id: 5, type: 'history' },
        { id: 6, type: 'medical' },
        { id: 7, type: 'poetry' }
    ]
    category = 'all'
    sortValue = 'relevance'
    foundResults = 0
    startIndex = 0
    maxResults = 30

    constructor() {
        makeAutoObservable(this)
        autorun(() => this.startSearch())
    }

    startSearch(event, searchValue) {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchValue}subject:${this.category}&orderBy=${this.sortValue}&key=AIzaSyDXqHouNmqOZ6QHy6CcsCQ_lK70lRgpODg&startIndex=${this.startIndex}&maxResults=${this.maxResults}`
            )
            .then((res) => {
                this.books = [...res.data.items]
                this.foundResults = res.data.totalItems
            })
            .catch((error) => console.log(error))
    }

    setSortValue(value) {
        this.sortValue = value
        console.log(this.sortValue)
    }

    setCategory(value) {
        this.category = value
    }

    loadMore() {
        this.startIndex += 30
        this.books = [...this.books, ...this.books]
    }
}

export default new Books()
