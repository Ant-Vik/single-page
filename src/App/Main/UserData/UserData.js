import React from 'react'

import './userData.css'


const UserData =()=> {
    return(
        <div className="user-data">
			<p className="get-in-touch">Get in touch!</p>
			<form action="text">
				<div className="formInput">
					<input type="name"/>
					<input type="email"/>
					<input type="text"/>
				</div>
                <button className="send">send</button>
			</form>
		</div>
    )
}


export default UserData