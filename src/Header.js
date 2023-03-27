import React, { useState } from 'react';
import './Header.css';


const Header = ({ newColor }) => {

    const [color, setColor] = useState('')

    const handleClick = (evt) => {
        evt.preventDefault();
        newColor(color);
    }
    
    const handleChange = (evt) => {
        setColor(evt.target.value);
    }
    

    return (
        <div className='header'>
            <>
                <h3>Welcome to the Color Factory.</h3>
                <form>
                    <input 
                        className='headerInput' 
                        type='text' 
                        onChange={handleChange} 
                        name='color' 
                        value={color}>
                    </input>
                    <button onClick={handleClick} >Add new color!</button>
                </form>
            </>
        </div>
    )
}

export default Header;