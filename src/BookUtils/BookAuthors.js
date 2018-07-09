import React from 'react'

const BookAuthors = (props) =>(
    <div className="book-authors">
        {props.book.authors ? props.book.authors.map((author, i) => (
            <span key={i}>{author}</span>
        )) : <span></span>}
    </div>
)

export default BookAuthors