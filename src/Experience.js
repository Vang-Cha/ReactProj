import React from 'react';
import ReactDOM from 'react-dom';
import icstars2 from './icstars2.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import style from './style.css'
import Edit from './Edit.png';
import Back from './Back.png'

 const Experience = props => {
        return (
        <div className="workhistory">
            <a href="/" className="avatar"></a>
            <div className="whole">
                <Paper>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <p className="pic">
                                <img className="icstar" src={props.pic}/>
                            </p>
                        </Grid>
                        <Grid item xs={10}>
                            <div className="position">
                               <p onClick={props.Showskill} style={{cursor: "pointer", color: "rgb(10, 121, 196)"}}>
                                    {props.position}
                                </p>
                            </div>
                            <div className="company">
                                {props.company}
                            </div>
                            <div className="duration" style={{color: "gray"}}>
                                {props.duration}
                            </div>
                        </Grid>
                        <Grid>
                            <a href="/">
                                <img className="editIcon" src={Edit} alt="edit"/>
                            </a>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
};


export default Experience;