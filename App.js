// react import
import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", {id : "parent"},
    React.createElement("div", {id : "parent"},
        [React.createElement("div", {}, "Child 1"), React.createElement("div", {}, "Child 2")],
    )
)


const heding = React.createElement(
    "h1" ,
    {id : "heading"}
    , "Hello World!hjdfkjeuith "
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heding);