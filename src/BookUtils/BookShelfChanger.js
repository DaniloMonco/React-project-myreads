import React from 'react'
import PropTypes from 'prop-types'

const BookShelfChanger = (props) => (
        <div className="book-shelf-changer">
            <select defaultValue="move" onChange={(event)=>props.onChangedBookStatus(props.book, event.target.value)}>
                <option key="move" value="move" disabled>Move to...</option>
                {props.actions.map((action)=>(
                    <option key={action.key} value={action.key} disabled={props.book.shelf === action.key}>{action.value}</option>
                ))}
            </select>
        </div>
)

BookShelfChanger.propTypes = {
    onChangedBookStatus: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    actions: PropTypes.array.isRequired
  }

export default BookShelfChanger