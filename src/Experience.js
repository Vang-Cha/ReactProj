import React from 'react';
import icstars from './icstars.jpg';

const Experience = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={icstars} alt="icstars"/>
            </a>
            <div className="content">
                <a href="/" className="position">{props.position}</a>
            </div>
            <div className="company">
                {props.company}
            </div>
            <div className="metadata">
                <span className="date">{props.durationDate}</span>
            </div>
        </div>
    );
};

export default Experience;