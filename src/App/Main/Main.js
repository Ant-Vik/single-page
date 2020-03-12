import React from 'react';

import "./main.css";

import MainNav from './MainNav/MainNav';
import ProductList from './Products/ProductList';
import UserData from './UserData/UserData';


const Main =() =>{
    return(
        <main>
            <div className="mainContainer">
                <div className="row">
                    <div className="mainContainerBody">
                        <div className="mainNav">
                            <MainNav/>
                        </div>
                        <div className="ProductList">
                            <ProductList/>
                        </div>
                        <div className="UserData">
                            <UserData/>
                        </div>	
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main