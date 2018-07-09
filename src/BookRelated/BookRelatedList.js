import React, {Component} from 'react'

import BookRelatedPreview from '../BookPreview/BookRelatedPreview'


class BookRelatedList extends Component {
    render(){
        return (
            <div>
                <ol className="books-grid">
                    {this.props.books && this.props.books.map((book)=>(
                    <li key={book.id}>
                        <BookRelatedPreview
                            openBookDetail={false}
                            closeBookDetail={()=>{}}
                            book={book}/>
                    </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default BookRelatedList