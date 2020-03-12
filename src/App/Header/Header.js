import React from 'react';

import "./header.css";

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header =() => {
    return (
        <header className="headerContainer">
			<div className="row">
            	<div className="container">
					<div className="Logo">
						<Logo/>
					</div>
					<div className="Menu">
						<Menu/>
					</div>	
				</div>
				<div className="header-text">
					<div className="title">
						May I introduce myself?
					</div>
					<div className="sub-title">
						Frontend Design| UI/UX Design
					</div>
				</div>
				<div className="btn">
					<button>GO AHEAD</button>
				</div>
			</div>
        </header>
    )
}

export default Header