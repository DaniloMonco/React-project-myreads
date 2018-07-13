import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import BookPreview from '../BookPreview/BookPreview'
import SearchFailure from '../AppUtils/SearchFailure'


const BookShelf = (props) => (
    <div className="bookshelf">
      <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary >
        <h2 className="bookshelf-title">{props.children} {props.title}</h2>
      </ExpansionPanelSummary>
        <div className="bookshelf-books">
          {(props.books.length === 0) && (
                <SearchFailure text={"Not yeat!"} width={"30px"} height={"30px"} />
          )}

          <ol className="books-grid">
            {props.books.map((book)=>(
              <li key={book.id}>
                <BookPreview 
                  viewMode={"shelfPreview"}
                  book={book}
                  onChangedBookStatus={props.onChangedBookStatus}/>
              </li>
            ))}
          </ol>
        </div>
      </ExpansionPanel>
    </div>    
)

BookShelf.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangedBookStatus: PropTypes.func.isRequired
}


export default BookShelf