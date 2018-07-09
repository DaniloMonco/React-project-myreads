import React, {Component} from 'react'

import BookDetailInfo from './BookDetailInfo'

import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import {CornerLeftDown} from 'react-feather'

const Transition = (props) => {
    return <Slide direction="up" {...props} />;
  }

class BookDetail extends Component {

    render(){
        const {book, openBookDetail, closeBookDetail, searchText} = this.props

        return(
                <Dialog
                    fullScreen
                    open={openBookDetail}
                    onClose={closeBookDetail}
                    TransitionComponent={Transition}>
                    <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton color="inherit" onClick={closeBookDetail}>
                        <CornerLeftDown />
                        </IconButton>
                    </Toolbar>
                    </AppBar>          
                    <BookDetailInfo book={book} searchText={searchText} />                    
                </Dialog>                  
        )
    }
}


export default BookDetail