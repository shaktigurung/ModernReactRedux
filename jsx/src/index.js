//Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component

// const createButtonText = () => {
//     return "Click on Me!";
// }

const App = () => {
    const buttonText = {text: "Click Me!"};
    const labelText = "Enter the name :";

    return (
    <div> 
        <label  className= "label" htmlFor="name">{labelText}</label>
        <input id="name" type="text" />
        <button style={{backgroundColor:"blue", color: "white"}}> {buttonText.text} </button>
    </div>
    );
};

// Displaying React Component into the browser
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

