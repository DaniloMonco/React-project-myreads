import React from 'react'
import PropTypes from 'prop-types'

import BookAuthors from '../BookUtils/BookAuthors'
import BookCategories from '../BookUtils/BookCategories'

const  BookDetailAttributeInfo =({book}) => (
    <div className="book-detail-right">
        <div className="book-detail-text"> 
            <span> <b>{book.title} {book.subtitle} </b> </span>
            <span>by <BookAuthors book={book} /> </span>
            <span>Publisher: {book.publisher} ({book.publishedDate})</span>
            <span>Paperback: {book.pageCount} pages</span>
            <span>Categories:<BookCategories book={book} /></span>
        </div>
    </div>

)

BookDetailAttributeInfo.propTypes = {
    book: PropTypes.object.isRequired
  };

export default BookDetailAttributeInfo