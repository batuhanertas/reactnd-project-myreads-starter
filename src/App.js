import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksOverview from './BooksOverview'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll().then( (books) => {
      this.setState( () => ({
        books
      }))
    })
  }

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then( () => {
      this.getAllBooks();
    })
  }


  render() {
    return (
      <div className="app">
        <Route path='/search' render={ () => (
          <SearchBooks/>
        )} />

        <Route exact path='/' render={ () => (
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
