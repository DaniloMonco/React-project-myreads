import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component'

import BookImage from '../BookUtils/BookImage'
import BookAuthors from '../BookUtils/BookAuthors'


class BookRelatedPreview extends Component {

    render(){
        const {book} = this.props

        let thumbnail=''
        if (book.imageLinks)
            thumbnail = `url(${book.imageLinks.thumbnail})`

        return (
                <div className="book">
                    <div className="book-top">
                        <BookImage thumbnail={thumbnail} />
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

export default BookRelatedPreview