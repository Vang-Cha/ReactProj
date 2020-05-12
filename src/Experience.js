import React from 'react';
import ReactDOM from 'react-dom';
import icstars2 from './icstars2.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import style from './style.css'
import Edit from './Edit.png';

 const Experience = props => {
        return (
        <div className="workhistory">
            <a href="/" className="avatar"></a>
            <div className="whole">
                <Paper>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <div className="avatar">
                                <img className="pic" src={props.pic}/>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="position">
                                <div onClick={() => {
                                    props.Showskill();
                                    props.Changeskill(props.position);
                                    }} style={{color: "rgb(10, 121, 196)"}}>
                                    {props.position}
                                </div>
                            </div>
                            <div className="company">
                                {props.company}
                            </div>
                            <div className="duration" style={{color: "gray"}}>
                                {props.duration}
                            </div>
                        </Grid>
                        <Grid>
                            <p href="/">
                                <img className="editIcon" src={Edit} alt="edit"/>
                            </p>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
};


export default Experience;