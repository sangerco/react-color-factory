import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './Colors.css'



const Colors = ({ colors }) => {
    console.log(colors)
    return (
        <>
            <h3>Please select a color:</h3>
            <div>
                {colors.map((color, i) => 
                    <Link 
                        key={uuidv4()} 
                        to={`/colors/${color}`} 
                        style={{ color: color }}  
                        className="colorLinks">
                        {color}
                    </Link>)}
            </div>
        </>
    )
}

export default Colors;