import React from "react";
import "../Button/Button.css"

function Button({symbol, color, handleClick}) {
    return(
        <div 
        onClick={()=>handleClick(symbol)}
        className="buttonWrapper" style={{backgroundColor:color}}>{symbol}</div>
    )
};

export default Button;