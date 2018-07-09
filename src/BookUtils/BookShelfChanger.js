import React from 'react'


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

export default BookShelfChanger