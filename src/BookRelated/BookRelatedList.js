import React, {Component} from 'react'
import PropTypes from 'prop-types'

import BookRelatedPreview from '../BookPreview/BookRelatedPreview'


class BookRelatedList extends Component {
    render(){
        return (
            <div>
                <ol className="books-grid">
                    {this.props.books && this.props.books.map((book)=>(
                    <li key={book.id}>
                        <BookRelatedPreview
                            book={book}/>
                    </li>
                    ))}
                </ol>
            </div>
        )
    }
}

BookRelatedList.propTypes = {
    books: PropTypes.array
}

export default BookRelatedList