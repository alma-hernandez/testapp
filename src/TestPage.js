import React, {useState} from "react";



const TestPage = () => {
    const[color, setColor] = useState("red");
    
const handleChangeColor = () => {
    const newColor = color === "red" ? "green" : "red";
    setColor(newColor);
};

return (
    <div>
      <button style={{ backgroundColor: color }} onClick={handleChangeColor}>
        Change Color
      </button>
    </div>
  );
};

export default TestPage;