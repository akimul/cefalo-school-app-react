import React from 'react'
import PropTypes from 'prop-types'

const Loader = (props) => {
    return (
        <div className="not-found">
            {props.forLoader && 
                <div>
                    <span className="emoji" role="img" aria-label="Loading">😃</span>
                    <h4>Please wait. Loading....</h4>
                </div>
            }
            {!props.forLoader && 
                <div>
                    <span className="emoji" role="img" aria-label="No result">😥</span>
                    <h4>Bummer! No results.</h4>
                </div>
            }
            
        </div>
    )
};

Loader.propTypes = {
    forLoader : PropTypes.bool
}

export default Loader