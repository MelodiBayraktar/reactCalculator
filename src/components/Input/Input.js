import React from "react";
import "../Input/Input.css";

function Input({result,text}) {
    return(
        <div className="inputWrapper"> 
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
};
export default Input;