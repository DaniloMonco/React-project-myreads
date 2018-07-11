import React from 'react'
import PropTypes from 'prop-types'

const BookDetailDescriptionInfo = ({book}) => (
    <div className="book-detail-description">
        <div className="book-detail-text"> 
            <span><b>Description</b></span>
            {book.description}
        </div>
    </div>
)

BookDetailDescriptionInfo.propTypes = {
    book: PropTypes.object.isRequired
  };

export default BookDetailDescriptionInfo