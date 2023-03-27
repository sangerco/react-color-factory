import React from "react";
import { useParams, Link } from "react-router-dom";
import './ColorPage.css';

const ColorPage = () => {
    let {color} = useParams();

    return (
        <div className='colorPageDiv' style={{ backgroundColor: color }}>
                <Link to='/colors' className="colorPageLinkText">Go Back.</Link>
        </div>
    )
}

export default ColorPage;