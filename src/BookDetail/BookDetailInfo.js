import React from 'react'
import PropTypes from 'prop-types'


import BookDetailImageInfo from './BookDetailImageInfo'
import BookDetailAttributeInfo from './BookDetailAttributeInfo'
import BookDetailDescriptionInfo  from './BookDetailDescriptionInfo'
import BookRelated from '../BookRelated/BookRelated'

const BookDetailInfo = ({book, searchText}) => (
<div>
    <div className="book-detail">
        <BookDetailImageInfo book={book} />
        <BookDetailAttributeInfo book={book} />
    </div>
    
    <BookDetailDescriptionInfo book={book} />

    {searchText && ( <BookRelated searchText={searchText} /> )}
</div>
)

BookDetailInfo.propTypes = {
    book: PropTypes.object.isRequired,
    searchText: PropTypes.string
  };

export default BookDetailInfo