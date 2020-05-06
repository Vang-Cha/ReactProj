import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Eexperience from './Experience';
import NWM from './NWM.png';
import Boldt from './Boldt.png';
import icstars2 from './icstars2.jpg';
import Back from './Back.png';
import Grid from '@material-ui/core/Grid';
import Newskills from './Skills';
import Modal from 'react-modal';

const App = () => {
    return (
       <div className="App">
           <a href="/">
               <img className="back" src={Back}/>
           </a>
           <br/>
           <br/>
           <h1>Experience</h1>
           <br/>
           <br/>

            <section>
                <Eexperience
                    pic={icstars2}
                    position="Intern"
                    company="i.c.stars"
                    duration="March 2020 - Present"
                    
                />
                <br/>
                <br/>
                <Eexperience
                    pic={NWM}
                    position="Business Analyst"
                    company="Northwestern Mutual"
                    duration="Sep 2018 - Mar 2020"
                    
                />
                <br/>
                <br/>
                <Eexperience
                    pic={Boldt}
                    position="Construction Worker"
                    company="The Boldt Company"
                    duration="Apr 2016 - Sep 2018"
                    
                />     
            </section>
            <Grid>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid className="addExp">
                        <b><u>Add New Experience</u></b>
                    </Grid>
                    <Grid>
                        <Expmodal />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
 };

let Expmodal = () => {
const [modalIsOpen, setModalIsOpen] = useState(false)
return (
    <div className="testmodal">
        <button onClick={() => setModalIsOpen(true)} className="plusbut"><b>+</b></button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <button className="exit" onClick={() => setModalIsOpen(false)}>X</button>
            <h2 className="modaltitle">Add New Experience</h2>
            <br/>
            <br/>
            <div className="modalbody">
                <label className="titletext">Title</label>
                <br/>
                <input type="text" className="addtitle" placeholder="Ex: Business Analyst"></input>
                <br/>
                <br/>
                <label className="titletext">Company</label>
                <br/>
                <input type="text" className="addtitle" placeholder="Ex: Northwestern Mutualsdfdsfdsfdsf"></input>
                <br/>
                <br/>
                

                <div className="TESTexpdropdown">
                    <label className="titletext">Start Date</label>
                    <br/>
                    <input className="startmonth" type="text" className="addtitle" placeholder="Month" onClick="myFunction()"></input>
                    <input className="startyear" type="text" className="addtitle" placeholder="Year"></input>
                    <br/>
                    <br/>
                    <label className="titletext">End Date</label>
                    <br/>
                    <input className="endmonth" type="text" className="addtitle" placeholder="Month" onClick="myFunction()"></input>
                    <input className="endyear" type="text" className="addtitle" placeholder="Year"></input>
                    <br/>
                </div>

                
            </div>
            <button className="savebut" onClick={() => setModalIsOpen(false)}>Save</button>
        </Modal>
    </div>
    );
};

const Myskills = () => {
    return (
        <div className="skillsPage">
            <a href="/">
                <img className="back" src={Back}/>
            </a>
            <div>
                <Newskills 
                    pos="Intern"
                    com="i.c.stars"
                    dur="March 2020 - Present"
                />
            </div>
            <Grid>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid className="addSkills">
                        <b><u>Add New Skills</u></b>
                        <button className="addxpicon">+</button>
                        <Skillmodal />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

let Skillmodal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="testskillmodal">
            <button onClick={() => setModalIsOpen(true)}>Add Skill MODAL</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <button className="exit" onClick={() => setModalIsOpen(false)}>X</button>
                <h2 className="modaltitle">Add Skills</h2>
                <br/>
                <br/>
                <div className="modalbody">
                    <label className="titletext">Title</label>
                    <br/>
                    <input type="text" className="addtitle" placeholder="Ex: Business Analyst"></input>
                    <br/>
                    <br/>
                    <label className="titletext">Company</label>
                    <br/>
                    <input type="text" className="addtitle" placeholder="Ex: Northwestern Mutualsdfdsfdsfdsf"></input>
                    <br/>
                    <br/>
                    
    
                    <div className="TESTskilldropdown">
                        <label className="titletext">Start Date</label>
                        <br/>
                        <input className="startmonth" type="text" className="addtitle" placeholder="Month" onClick="myFunction()"></input>
                        <input className="startyear" type="text" className="addtitle" placeholder="Year"></input>
                        <br/>
                        <br/>
                        <label className="titletext">End Date</label>
                        <br/>
                        <input className="endmonth" type="text" className="addtitle" placeholder="Month" onClick="myFunction()"></input>
                        <input className="endyear" type="text" className="addtitle" placeholder="Year"></input>
                        <br/>
                    </div>
    
                    
                </div>
                <button className="savebut" onClick={() => setModalIsOpen(false)}>Save</button>
            </Modal>
        </div>
        );
    };

Modal.setAppElement('#root');


ReactDOM.render(
    <App />,
    // <Myskills />,
    // <Expmodal />,
    // <Skillmodal />,
    document.getElementById('root')
);

