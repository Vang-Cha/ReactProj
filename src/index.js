import React from 'react';
import ReactDOM from 'react-dom';
import Experience from './Experience';



const App = () => {
    return (
       <div className="App">
            <Experience 
                company="icstars"
                durationDate="March 2020 - Present"
                position="intern"
            />  
        </div>
    );
 };


ReactDOM.render(
    <App />,
    document.getElementById('root')
);