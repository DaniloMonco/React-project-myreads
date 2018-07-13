import React from 'react'
import {Route} from 'react-router-dom'

import './App.css'

import AppTitle from './AppUtils/AppTitle'
import AppOpenSearch from './AppUtils/AppOpenSearch'
import BookList from './BookShelf/BookList'

import BookSearch from './BookSearch/BookSearch'


import * as BooksAPI from './APIs/BooksAPI'



class BooksApp extends React.Component {

  
  componentDidMount(){
    this.setState({loading:true})
    BooksAPI.getAll().then((books)=> {
      this.setState({books: books, loading:false})
    })
  }
  
  state={
    books:[],
    loading: false
  }

  changedBookStatus = (book, newStatus) => {   
    if (book.shelf === newStatus)
      return

    book.shelf = newStatus
    let books = this.state.books  
    const index = books.findIndex((b)=>b.id === book.id)
    if (index === -1)
      books.push(book)
    else
    {
      //Se for none eu quero q seja eliminado definitivamente do meu state
      if (newStatus === "none")
        books.splice(index, 1);
      else
        books.splice(index, 1, book);
    }

    this.setState({books})
    //Sempre atualizo na API async para evitar problemas de performance
    BooksAPI.update(book, book.shelf)
  }


  render() {
    const bookCollection = this.state.books.map(b => ({id: b.id, shelf:b.shelf}));

    return (
      <div className="app">
        
        <Route path="/search" render={()=>(
            <BookSearch 
              bookCollection={bookCollection}
              onChangedBookStatus={this.changedBookStatus} 
              />
          )} 
        />

        <Route exact path="/" render={()=>(
          <div className="list-books">
            <AppTitle 
              title="My Reads" />

            <BookList
              loading={this.state.loading}
              books={this.state.books}
              onChangedBookStatus={this.changedBookStatus} />

            <AppOpenSearch />
          </div>          
        )
        } /> 
        
      </div>
    )
  }
}

export default BooksApp
