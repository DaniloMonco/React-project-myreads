import React from 'react'
import PropTypes from 'prop-types'
import {MessageSquare} from 'react-feather'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const SearchFailure = (props) => (
    <Paper className="book-not-found" elevation={1}>
        <Typography variant="headline" component="h3">
            {props.text}
        </Typography>
        <MessageSquare fill={"#999"} width={props.width} height={props.height} />
    </Paper>
)

SearchFailure.propTypes = {
    text: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  };

export default SearchFailure