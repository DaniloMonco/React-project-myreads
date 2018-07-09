import React from 'react'
import {MessageSquare} from 'react-feather'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const SearchFailure = (props) => (
    <Paper className="book-not-found" elevation={1}>
        <Typography variant="headline" component="h3">
            {props.text}
        </Typography>
        <MessageSquare fill={"#999"} width={props.width} height={props.height} />
    </Paper>
)

export default SearchFailure