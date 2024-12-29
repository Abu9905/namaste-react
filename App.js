// react import
import React from 'react';
import ReactDOM from 'react-dom/client';

const elem = <h1>
    <span>Abu Is King</span>
    </h1>

const  title = (
    <h1 className='heading'> jsx heading</h1>
);

const number = 10000;
// React function component:-
const HeadingComponent = () => (
    <div id ='container'>
        {elem}
        {title}
        <h1 className='heading'>namaste React  heading</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);