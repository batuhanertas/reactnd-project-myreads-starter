import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BookList extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    onUpdateShelf: PropTypes.func,
  }

  render() {
    const { books, shelf, onUpdateShelf } = this.props;
    let booksOfTheCurrentShelf = [];

    if (books.length > 0) {
      booksOfTheCurrentShelf = books.filter( (book) => (
        book.shelf === shelf
      ));
    }

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOfTheCurrentShelf.map( book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                  <div className="book-shelf-changer">
                    <select value={shelf} onChange={(event) => {
                      onUpdateShelf(event.target.value, book)
                    }}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
              </li>
          ))}
        </ol>
        <div  className="open-search">
          <Link to='/search' />
        </div>
      </div>
    )
  }
}

export default BookList