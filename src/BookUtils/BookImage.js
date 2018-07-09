import React from 'react'

const BookImage= (props) => (
    <div>
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.thumbnail}}></div>
        {props.children}
    </div>
)

export default BookImage