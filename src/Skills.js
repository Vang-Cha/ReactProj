import React from 'react';
import Grid from '@material-ui/core/Grid';
import Skillmodal from './App';
import Expmodal from './App';

 const Internskills = props => {
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
                        <div className="skills">{props.tech1}</div>
                        <div className="skills">{props.tech2}</div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3>Interpersonal Skills</h3>
                    <div className="mainskills">
                        <div className="skills">{props.inter1}</div>
                        <div className="skills">{props.inter2}</div>
                    </div>
                </div>

            </div>
        );
    };
    

export default Internskills;