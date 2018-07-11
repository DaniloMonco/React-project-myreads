import React, {Component} from 'react'
import PropTypes from 'prop-types'

import BookPreview from '../BookPreview/BookPreview'


class BookSearchList extends Component {
    render(){
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books && this.props.books.map((book)=>(
                    <li key={book.id}>
                        <BookPreview viewMode={"searchPreview"}
                            book={book}
                            searchText={this.props.searchText}
                            onChangedBookStatus={this.props.onChangedBookStatus}/>
                    </li>
                    ))}
                </ol>
            </div>
        )
    }
}

BookSearchList.propTypes = {
    books: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired,
    onChangedBookStatus: PropTypes.func.isRequired
  }

export default BookSearchList