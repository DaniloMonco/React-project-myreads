import React, {Component} from 'react'
import PropTypes from 'prop-types'

import BookInputSearch from './BookInputSearch'
import SearchFailure from '../AppUtils/SearchFailure'
import BookSearchList from './BookSearchList'
import Loader from '../AppUtils/Loader'

import * as BooksAPI from '../APIs/BooksAPI'

class BookSearch extends Component{
    state={
        searchText: '',
        books: [],
        searchFailure: false,
        loading: false
    }

    updateSearchText = (inputSearchText) => {
        this.setState({searchText: inputSearchText, searchFailure: false, loading:true})
    
        if (this.state.searchText.length > 0)
        {
            this.getBooks()    
            return
        }

        this.setState({books:[], loading:false})
    }

    getBooks = () =>{
        const {searchText} = this.state
        const {bookCollection} = this.props

        BooksAPI.search(searchText)
        .then((books) => {
            if (Object.keys(books)[0]==="error")
                throw new Error("no search term available!")
            
            this.updateBookCollectionList(books, bookCollection)
            this.setState({loading:false})
        })
        .catch((error) => {
            this.setState({ books: [], searchFailure: true, loading:false})
        });
    }

    //Aqui vou retirar da lista os livros que tenho listado na outra tela
    //Acho um recurso mais interessante do que o proposto no requisito inicial
    updateBookCollectionList = (books, bookCollection) =>{

        
        if (!bookCollection)
            books.forEach(b=>b.shelf = "none")
        else
        {
            books.forEach(b=>{
                const book = bookCollection.find((book)=>b.id ===book.id)
                if (book)
                    b.shelf = book.shelf
                else
                    b.shelf = "none"
                }
            )
        }
        
        this.setState({books})
    }

    render(){
        const {books, searchFailure, searchText, loading} = this.state
        const {onChangedBookStatus} = this.props

        return(
            <div className="search-books">
                <BookInputSearch onInputSearchChange={(event)=>this.updateSearchText(event.target.value)} />
                
                <BookSearchList 
                    searchText={searchText}
                    books={books} 
                    onChangedBookStatus={(book, newStatus)=>{
                        onChangedBookStatus(book, newStatus)
                        this.updateBookCollectionList(books, [book])
                    }}/>

                <Loader loading={loading} blockUI={false} />

                {searchFailure && (<SearchFailure text={"Book not found!"} width={"40px"} height={"40px"} />)}
            </div>            
        )
    }
}

BookSearch.propTypes = {
    bookCollection: PropTypes.array.isRequired,
    onChangedBookStatus: PropTypes.func.isRequired     
  }

export default BookSearch