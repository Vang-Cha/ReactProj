import React from 'react';
import ReactDOM from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Back from './Back.png';
import style from './style.css';


 const Newskills = props => {
        return (
            <div className="skillspage">
                <h1 className="pos">
                    {props.pos}
                </h1>
                <div className="com">
                    {props.com}
                </div>
                <div className="dur">
                    {props.dur}
                </div>
                <div>
                    <br/>
                    <br/>
                    <h3>Technical Skills</h3>
                    <div className="mainskills">
                        <div className="skills">Javascript</div>
                        <div className="skills">HTML</div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Interpersonal Skills</h3>
                    <div className="mainskills">
                        <div className="skills">Leadership</div>
                        <div className="skills">Communication</div>
                    </div>
                </div>

            </div>
        );
    };
    

export default Newskills;