import React from 'react'

import "./mainNav.css"

import MainNavItem from './MainNavItem';
import mainProducts from './mainProducts'

const MainNav = (props)=> {
    return(
        <div className="MainNav">
            <div className="main-headline">
                <p className="main-title">RAPHAE LECHNER.</p>
                <p className="main-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias minima, fugit. Tempore non, neque veniam perspiciatis porro molestias fugiat quaerat impedit debitis illum architecto ipsa nostrum nisi, natus dolor id!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ut at sit qui delectus est quos dolore, enim unde ipsam eius praesentium quasi sequi, omnis porro possimus repellat, quis aperiam?</p>
            </div>
            <div className="col-mn">
                {
                    mainProducts.map(({
                        id,
                        image,
                        text,
                    })=>(

                    <div className="mainProduct" key={id}>
                        <MainNavItem
                            image={image}
                            text={text}
                        />
                    </div>
                    ))
                }
            </div>
        </div>
    )
}


export default MainNav