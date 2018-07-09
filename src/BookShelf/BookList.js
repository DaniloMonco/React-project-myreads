import React, {Component} from 'react'
import {BookOpen} from 'react-feather' 
import {Bookmark} from 'react-feather'
import {Book} from 'react-feather'

import BookShelf from './BookShelf'


class BookList extends Component {

  render(){
    const currentlyReading = this.props.books.filter((book)=> book.shelf === "currentlyReading")
    const wantToRead = this.props.books.filter((book)=> book.shelf === "wantToRead")
    const read = this.props.books.filter((book)=> book.shelf === "read")
    
    return (      
      <div className="list-books-content">
        <div>          
          <BookShelf 
            title="Currently Reading" 
            books={currentlyReading}
            onChangedBookStatus={this.props.onChangedBookStatus}>
              <BookOpen />
          </BookShelf>

          <BookShelf 
            title="Want to Read" 
            books={wantToRead} 
            onChangedBookStatus={this.props.onChangedBookStatus}>
              <Bookmark />
          </BookShelf>

          <BookShelf 
            title="Read" 
            books={read} 
            onChangedBookStatus={this.props.onChangedBookStatus}>
              <Book />
          </BookShelf>
        </div>
      </div>
    )
  }
}

export default BookList