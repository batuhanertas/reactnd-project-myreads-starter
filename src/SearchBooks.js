import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from "./BookList";

class SearchBooks extends Component {

  handleChange = (e) => {
    e.preventDefault()

    if (this.props.onSearch) {
      this.props.onSearch(e.target.value)
    }
  }

  componentWillUnmount() {
    this.props.onSearch('');
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'  className="close-search"> Close </Link>
          <div className="search-books-input-wrapper">
            <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookList
              onUpdateShelf={this.props.updateShelf}
              shelf="searchPage"
              books={this.props.searchResults}/>
          </ol>
        </div>
      </div>
    )
  }

}

export default SearchBooks