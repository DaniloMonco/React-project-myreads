import React from 'react'

const  BookCategories = (props) => (
    <div className="book-authors">
        {props.book.categories ? props.book.categories.map((categ, i) => (
            <span key={i}>{categ}</span>
        )) : <span></span>}
    </div>   
)

export default BookCategories