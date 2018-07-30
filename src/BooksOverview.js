import React, { Component } from 'react'
import BookList from './BookList'

class BooksOverview extends Component {
  render (){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BookList
                onUpdateShelf={this.props.updateShelf}
                shelf="currentlyReading"
                books={this.props.books}/>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BookList
                onUpdateShelf={this.props.updateShelf}
                shelf="wantToRead"
                books={this.props.books}/>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BookList
                onUpdateShelf={this.props.updateShelf}
                shelf="read"
                books={this.props.books}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BooksOverview