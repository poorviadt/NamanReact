// code : 1
// const heading = React.createElement("h1", {id:"heading"}, "Hello I'm Learning React!");
// const subHeading = React.createElement("h2", {}, "Hi, Hello, Keep going!");
// const para = React.createElement("p", {}, "You Got This");


// const container = React.createElement("div", {}, heading, subHeading, para);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);


// Code :2 

// <div id="parent">
        //<div id="child">
        //<h1>I'm h1 tag</h1>
        // </div>
// </div>


import React from "react"
import ReactDOM from "react-dom";

const parent = React.createElement("div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{}, "I'm React code.🚀🚀🚀🚀🚀🚀")
    )
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);