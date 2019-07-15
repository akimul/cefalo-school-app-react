import React from 'react'
import Emoji from './Emoji'
import PropTypes from 'prop-types'

const Loader = (props) => {
    return (
        <div className="not-found">
            {props.forLoader && 
                <div>
                    <Emoji symbol="😃" label="Loading"/>
                    <h4>Please wait. Loading....</h4>
                </div>
            }
            {!props.forLoader && 
                <div>
                    <Emoji symbol="😥" label="No result"/>
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