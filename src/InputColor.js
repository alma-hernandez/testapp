import React, {useState} from "react";

const BackgroundColor = () => {
    const[color, setColor]= useState("");

    const handleClick = (newColor) => {
        setColor(newColor);
    };

return (
    <div style={{backgroundColor: color}}>
        <h1>Change color of background by clicking color below.</h1>
        <ul>
        <li onClick={() => handleClick("green")}>Green</li>
        <li onClick={() => handleClick("red")}>Red</li>
        <li onClick={() => handleClick("purple")}>Purple</li>
        <li onClick={() => handleClick("blue")}>Blue</li>
        <li onClick={() => handleClick("orange")}>Orange</li>
        </ul>
    </div>
)
}

export default BackgroundColor;