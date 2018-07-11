import React, {Component} from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'

import BookImage from '../BookUtils/BookImage'
import BookAuthors from '../BookUtils/BookAuthors'


class BookRelatedPreview extends Component {

    render(){
        const {book} = this.props

        return (
                <div className="book">
                    <div className="book-top">
                        <BookImage book={book} />
                    </div>
                    <div className="book-title-related">{book.title}</div>
                    <BookAuthors book={book} />
                    <StarRatingComponent 
                        name={book.id}
                        editing={false}
                        value={book.averageRating}
                        />
                </div>            
        )
    }
}

BookRelatedPreview.propTypes = {
    book: PropTypes.object.isRequired
  };


export default BookRelatedPreview