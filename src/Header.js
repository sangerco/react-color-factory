import React, { useState } from 'react';
import './Header.css';


const Header = ({ newColor }) => {


    const handleClick = (evt) => {
        evt.preventDefault();
        console.log(evt);
    }
    
    

    return (
        <div className='header'>
            <>
                <h3>Welcome to the Color Factory.</h3>
                <form>
                    <input className='headerInput' type='text' value={c}></input>
                    <button onClick={handleClick} >Add new color!</button>
                </form>
            </>
        </div>
    )
}

export default Header;