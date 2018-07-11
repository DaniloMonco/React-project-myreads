import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const  AppOpenSearch = ()=>(
    <div className="open-search" >
      <Button variant="fab">
        <Link to="/search">"Add a book"</Link>
      </Button>    
        
    </div>
)

export default AppOpenSearch