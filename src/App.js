import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksOverview from './BooksOverview'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then( (books) => {
      this.setState( () => ({
        books: books
      }))
    })
  }

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then( () => {
      this.getAllBooks();
    })
  }

  onSearch = (query) => {
    if (!query) {
      this.setState( () => ({
        searchResults: []
      }))
      return;
    }
    BooksAPI.search(query).then( (searchResults) => {
      this.setState( () => ({
        searchResults: searchResults
      }))
    })
  }


  render() {
    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <SearchBooks
            searchResults={this.state.searchResults}
            onSearch={ (query) => {
              this.onSearch(query)
            }}
            updateShelf={this.updateShelf}
          />
        )} />

        <Route exact path='/' render={ (history) => (
          <BooksOverview
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        )} />


      </div>
    )
  }
}

export default BooksApp
