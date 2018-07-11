import React from 'react'
import PropTypes from 'prop-types'

const BookISBNTypes = (props) =>(
    <div className="book-authors">
        {props.book.industryIdentifiers ? props.book.industryIdentifiers.map((isbnType, i) => (
            <span key={i}> {isbnType.type}: {isbnType.identifier}</span>
        )) : <span></span>}
    </div>    
)

BookISBNTypes.propTypes = {
    book: PropTypes.object.isRequired
  }

export default BookISBNTypes
