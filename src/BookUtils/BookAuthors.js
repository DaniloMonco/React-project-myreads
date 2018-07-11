import React from 'react'
import PropTypes from 'prop-types'

const BookAuthors = (props) =>(
    <div className="book-authors">
        {props.book.authors ? props.book.authors.map((author, i) => (
            <span key={i}>{author}</span>
        )) : <span></span>}
    </div>
)

BookAuthors.propTypes = {
    book: PropTypes.object.isRequired
  }


export default BookAuthors