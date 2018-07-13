import React, {Component} from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'

import BookImage from '../BookUtils/BookImage'
import BookShelfChanger from '../BookUtils/BookShelfChanger'
import BookAuthors from '../BookUtils/BookAuthors'
import BookDetail from '../BookDetail/BookDetail'



class BookPreview extends Component {
    state = {
        openBookDetail: false,
      };
    
    onOpenBookDetails = () => {
    this.setState({ openBookDetail: true });
    };

    onCloseBookDetails = () => {
    this.setState({ openBookDetail: false });
    };
    


    render(){
        const {viewMode, book, onChangedBookStatus, searchText} = this.props

        let actionsChanger = [
            {key:"currentlyReading", value: "Currently Reading"},
            {key:"wantToRead", value: "Want To Read"},
            {key:"read", value: "Read"},
            {key:"none", value: "None"}]

        return (
                <div className="book">
                    <div className="book-top">
                        <BookImage book={book} />
                        
                        <BookShelfChanger
                            onChangedBookStatus={onChangedBookStatus}
                            book={book}
                            viewMode = {viewMode}
                            actions={actionsChanger} />                    
                    </div>

                    <div className="book-title" onClick={this.onOpenBookDetails}>
                        {book.title}                                          
                     </div>
                    <BookAuthors book={book} />

                    {viewMode !== "shelfPreview" && (
                            <StarRatingComponent 
                                name={book.id}
                                editing={false}
                                value={book.averageRating}
                                />
                        )}

                    <BookDetail 
                        searchText={searchText}
                        book={book}
                        openBookDetail={this.state.openBookDetail}
                        closeBookDetail={this.onCloseBookDetails}/>
                </div>
        )
    }
}

BookPreview.propTypes = {
    viewMode: PropTypes.string.isRequired,
    book : PropTypes.object.isRequired,
    onChangedBookStatus : PropTypes.func.isRequired,
    searchText: PropTypes.string
  }

export default BookPreview