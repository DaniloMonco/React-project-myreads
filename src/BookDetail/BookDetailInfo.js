import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

import BookImage from '../BookUtils/BookImage'
import BookAuthors from '../BookUtils/BookAuthors'
import BookCategories from '../BookUtils/BookCategories'
import BookISBNTypes from '../BookUtils/BookISBNTypes'
import BookRelated from '../BookRelated/BookRelated'

const BookDetailInfo = ({book, searchText}) => (
<div>
    <div className="book-detail">
        <div className="book-detail-left">
            <div className="book-detail-text"> 
            <BookImage thumbnail={`url(${book.imageLinks.thumbnail})`} />
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

        <div className="book-detail-right">
            <div className="book-detail-text"> 
                <span> <b>{book.title} {book.subtitle} </b> </span>
                <span>by <BookAuthors book={book} /> </span>
                <span>Publisher: {book.publisher} ({book.publishedDate})</span>
                <span>Paperback: {book.pageCount} pages</span>
                <span>Categories:<BookCategories book={book} /></span>
            </div>
        </div>
    </div>
    
    <div className="book-detail-description">
        <div className="book-detail-text"> 
            <span><b>Description</b></span>
            {book.description}
        </div>
    </div>

    {searchText && ( <BookRelated searchText={searchText} /> )}
</div>
)

export default BookDetailInfo