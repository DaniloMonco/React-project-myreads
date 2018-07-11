import React, {Component} from 'react'
import PropTypes from 'prop-types'

import BookInputSearch from './BookInputSearch'
import SearchFailure from '../AppUtils/SearchFailure'
import BookSearchList from './BookSearchList'

import * as BooksAPI from '../APIs/BooksAPI'

class BookSearch extends Component{
    state={
        searchText: '',
        books: [],
        searchFailure: false
    }

    updateSearchText = (inputSearchText) => {
        this.setState({searchText: inputSearchText, searchFailure: false})
        
        if (this.state.searchText.length !== 0)
        {
            this.getBooks()    
            return
        }
        
        this.setState({books:[]})
    }

    getBooks = () =>{
        const {searchText} = this.state
        const {bookCollection} = this.props

        BooksAPI.search(searchText)
        .then((books) => {
            if (Object.keys(books)[0]==="error")
                throw new Error("no search term available!");
            
            this.updateBookCollectionList(books, bookCollection)
        })
        .catch((error) => {
            this.setState({ books: [], searchFailure: true})
        });
    }

    //Aqui vou retirar da lista os livros que tenho listado na outra tela
    //Acho um recurso mais interessante do que o proposto no requisito inicial
    updateBookCollectionList = (books, bookCollection) =>{
        const booksFiltered = books.filter((book)=> {
                return !bookCollection.find((bookC)=>{ 
                    return book.id === bookC.id
                    }) 
                });
        this.setState({books: booksFiltered})
    }

    render(){
        const {books, searchFailure, searchText} = this.state
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