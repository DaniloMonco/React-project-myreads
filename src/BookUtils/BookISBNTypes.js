import React from 'react'

const BookISBNTypes = (props) =>(
    <div className="book-authors">
        {props.book.industryIdentifiers ? props.book.industryIdentifiers.map((isbnType, i) => (
            <span key={i}> {isbnType.type}: {isbnType.identifier}</span>
        )) : <span></span>}
    </div>    
)

export default BookISBNTypes
