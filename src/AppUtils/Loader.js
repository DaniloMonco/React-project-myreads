import React from 'react'
import  {DotLoader} from 'react-spinners'
import PropTypes from 'prop-types'

const Loader = ({loading, blockUI}) => (
  <div>
    {blockUI && (
      <div className="overlay" />
    )}

    <div className="centered">
      <DotLoader
            color={"#0D1D9E"}   
            loading={loading} />
    </div>
  </div>
)

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  blockUI: PropTypes.bool.isRequired
}

export default Loader