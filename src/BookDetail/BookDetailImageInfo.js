import React from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'

import BookImage from '../BookUtils/BookImage'
import BookISBNTypes from '../BookUtils/BookISBNTypes'

const BookDetailImageInfo = ({book}) =>(
    <div className="book-detail-left">
        <div className="book-detail-text"> 
        <BookImage book={book} />
            <center>
            <span>Customer Review</span>
            <StarRatingComponent 
                name={book.id}
                editing={false}
                value={book.averageRating}
                />
            </center>
            <span><BookISBNTypes book={book} /> </span>
        </div>
    </div>
)

BookDetailImageInfo.propTypes = {
    book: PropTypes.object.isRequired
  };

export default BookDetailImageInfo