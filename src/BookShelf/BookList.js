import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BookOpen} from 'react-feather' 
import {Bookmark} from 'react-feather'
import {Book} from 'react-feather'

import BookShelf from './BookShelf'
import Loader from '../AppUtils/Loader'


class BookList extends Component {

  render(){
    const {books, onChangedBookStatus, loading} = this.props

    const currentlyReading = books.filter((book)=> book.shelf === "currentlyReading")
    const wantToRead = books.filter((book)=> book.shelf === "wantToRead")
    const read = books.filter((book)=> book.shelf === "read")
    
    return (      
      <div className="list-books-content">
        <div>          
          <Loader loading={loading} blockUI={loading} />

          <BookShelf 
            title="Currently Reading" 
            books={currentlyReading}
            onChangedBookStatus={onChangedBookStatus}>
              <BookOpen />
          </BookShelf>

          <BookShelf 
            title="Want to Read" 
            books={wantToRead} 
            onChangedBookStatus={onChangedBookStatus}>
              <Bookmark />
          </BookShelf>

          <BookShelf 
            title="Read" 
            books={read} 
            onChangedBookStatus={onChangedBookStatus}>
              <Book />
          </BookShelf>
        </div>
      </div>
    )
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onChangedBookStatus: PropTypes.func.isRequired
}

export default BookList