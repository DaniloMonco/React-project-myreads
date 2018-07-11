import React from 'react'
import PropTypes from 'prop-types'

const  BookCategories = (props) => (
    <div className="book-authors">
        {props.book.categories ? props.book.categories.map((categ, i) => (
            <span key={i}>{categ}</span>
        )) : <span></span>}
    </div>   
)

BookCategories.propTypes = {
    book: PropTypes.object.isRequired
  }

export default BookCategories