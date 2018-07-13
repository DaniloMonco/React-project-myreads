import React, {Component} from 'react'
import PropTypes from 'prop-types'

import BookRelatedList from './BookRelatedList'
import Loader from '../AppUtils/Loader'

import * as GoogleBookApi from '../APIs/GoogleBookApi'



class BookRelated extends Component{

    state ={
        books:[],
        loading: false
    }

    getRelated=()=>{
        const {searchText} = this.props
        this.setState({loading: true})

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

            this.setState({books: booksToModel, loading: false})
        })
        .catch((error) => {
            this.setState({ books: [], loading: false})
        });
    }

    componentDidMount(){
        this.getRelated()
    }


    render(){
        const {books, loading} = this.state
        return (
            <div>
                <div className="book-detail-description">
                    <div className="book-detail-text"> 
                        <span><b>Book Related</b></span>
                    </div>
                </div>

                {books && (
                    <div>
                        <Loader loading={loading} blockUI={false} />
                        <BookRelatedList 
                            books={books} />
                    </div>
                )}
            </div>
        )
    }
}

BookRelated.propTypes = {
    searchText: PropTypes.string.isRequired
  }


export default BookRelated