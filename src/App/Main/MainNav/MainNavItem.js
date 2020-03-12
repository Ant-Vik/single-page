import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './MainNavItem.css'


class MainNavItem extends Component {
    render() {
        const{
            image,
            text,
        } = this.props
        
        return(
            <div >
                <div className="col-mn-1">
                    <div className="icon">
                        <a href="/">
                            <img src={image} alt=""/>
                        </a>
                    </div>
                    <p className="icon-text">{text}</p>
                </div>
            </div>

        )
    }
}

MainNavItem.propTypes = {
     image:PropTypes.string,
     text:PropTypes.string
}


export default MainNavItem