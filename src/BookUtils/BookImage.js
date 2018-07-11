import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookImage extends Component {
    render() {
        let thumbnail=''
        if (this.props.book.imageLinks)
            thumbnail = `url(${this.props.book.imageLinks.thumbnail})`  

        return (
            <div>
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: thumbnail}}></div>
                {this.props.children}
            </div>			            
        )
    }
}


BookImage.propTypes = {
    book: PropTypes.object.isRequired,
    children: PropTypes.children
}

export default BookImage