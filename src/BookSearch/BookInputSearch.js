import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'

const BookInputSearch = ({onInputSearchChange}) =>(
    <div className="search-books-bar">
        <Link className="close-search" to="/">"Close"</Link>
        <div className="search-books-input-wrapper">                    
            <DebounceInput placeholder="Search by title or author"
                minLength={1}
                forceNotifyByEnter={true}
                debounceTimeout={200}
                onChange={onInputSearchChange} />
        </div>
    </div>

)

BookInputSearch.propTypes = {
    onInputSearchChange: PropTypes.func.isRequired
}

export default BookInputSearch