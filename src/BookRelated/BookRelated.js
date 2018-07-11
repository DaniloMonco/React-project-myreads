import React, {Component} from 'react'
import PropTypes from 'prop-types'

import BookRelatedList from './BookRelatedList'

import * as GoogleBookApi from '../APIs/GoogleBookApi'



class BookRelated extends Component{

    state ={
        books:[]
    }

    getRelated=()=>{
        const {searchText} = this.props

        GoogleBookApi.search(searchText).then((books)=>{

            let booksToModel = [];
            books.forEach(book => {
                    const thumbnail =book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
                    booksToModel.push(
                                {
                                    imageLinks: {thumbnail: thumbnail },
                                    title: book.volumeInfo.title,
                                    subtitle: book.volumeInfo.subtitle,
                                    id: book.id,
                                    averageRating: book.volumeInfo.averageRating,
                                    authors: book.volumeInfo.authors
                                }
                            )
                        })

            this.setState({books: booksToModel})
        })
        .catch((error) => {
            this.setState({ books: []})
        });
    }

    componentDidMount(){
        this.getRelated()
    }


    render(){
        return (
            <div>
                <div className="book-detail-description">
                    <div className="book-detail-text"> 
                        <span><b>Book Related</b></span>
                    </div>
                </div>

                {this.state.books && (
                    <BookRelatedList 
                        books={this.state.books} />
                )}
            </div>
        )
    }
}

BookRelated.propTypes = {
    searchText: PropTypes.string.isRequired
  }


export default BookRelated