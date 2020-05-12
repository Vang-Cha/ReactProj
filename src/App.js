import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Experience from './Experience';
import NWM from './NWM.png';
import Boldt from './Boldt.png';
import icstars2 from './icstars2.jpg';
import Back from './Back.png';
import Grid from '@material-ui/core/Grid';
import Newskills from './Skills';
import Modal from 'react-modal';
import Internskills from './Skills'
import Icon from '@material-ui/icons/Search';


export class App extends React.Component {
    state={showing: "Experience", skill: "Intern"}
    Showskill = () => {
        this.setState({showing: "Skills"})
    }
    Showexperience = () => {
        this.setState({showing: "Experience"})
    }
    Changeskill = (skill) => {
        this.setState({skill: skill})
    }
    render() {
        if (this.state.showing === "Experience") {

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
                     <Experience
                         pic={icstars2}
                         position="Intern"
                         company="i.c.stars"
                         duration="March 2020 - Present"
                         Showskill = {this.Showskill}
                         Changeskill = {this.Changeskill}
                     />
                     <br/>
                     <br/>
                     <Experience
                         pic={NWM}
                         position="Business Analyst"
                         company="Northwestern Mutual"
                         duration="Sep 2018 - Mar 2020"
                         Showskill = {this.Showskill}
                         Changeskill = {this.Changeskill}
                     />
                     <br/>
                     <br/>
                     <Experience
                         pic={Boldt}
                         position="Construction Worker"
                         company="The Boldt Company"
                         duration="Apr 2016 - Sep 2018"
                         Showskill = {this.Showskill}
                         Changeskill = {this.Changeskill}
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
      } else if (this.state.showing === "Skills") {
        return (
            <div>
                <Myskills skill={this.state.skill}
                />
            </div>
        )
    }
    }
} 


 export let Expmodal = () => {
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
                    <input type="text" className="addtitle" placeholder="Ex: Northwestern Mutual"></input>
                    <br/>
                    <br/>
                    
    
                    <div className="TESTexpdropdown">
                        <label className="titletext">Start Date</label>
                        <br/>
                        <select className="months">
                            <option value="jan">January</option>
                            <option value="feb">February</option>
                            <option value="mar">March</option>
                            <option value="apr">April</option>
                            <option value="may">May</option>
                            <option value="jun">June</option>
                            <option value="jul">July</option>
                            <option value="aug">August</option>
                            <option value="sep">September</option>
                            <option value="oct">October</option>
                            <option value="nov">November</option>
                            <option value="dec">December</option>
                        </select>
                        <select className="months">
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                        <br/>
                        <br/>
                        <label className="titletext">End Date</label>
                        <br/>
                        <select className="months">
                            <option value="jan">January</option>
                            <option value="feb">February</option>
                            <option value="mar">March</option>
                            <option value="apr">April</option>
                            <option value="may">May</option>
                            <option value="jun">June</option>
                            <option value="jul">July</option>
                            <option value="aug">August</option>
                            <option value="sep">September</option>
                            <option value="oct">October</option>
                            <option value="nov">November</option>
                            <option value="dec">December</option>
                        </select>
                        {/* <input className="endmonth" type="text" className="addtitle" placeholder="Month"></input> */}
                        <select className="months">
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                        {/* <input className="endyear" type="text" className="addtitle" placeholder="Year"></input> */}
                        <br/>
                    </div>
    
                    
                </div>
                <button className="savebut" onClick={() => setModalIsOpen(false)}>Save</button>
            </Modal>
        </div>
        );
    };
    
    export const Myskills = (props) => {
        return (
            <div className="skillsPage">
                <a href="/">
                    <img className="back" src={Back}/>
                </a>
                <div>
                    {props.skill === "Intern" &&
                    <Internskills 
                        pos="Intern"
                        com="i.c.stars"
                        dur="March 2020 - Present"
                        tech1="Javascript"
                        tech2="HTML"
                        inter1="Leadership"
                        inter2="Communication"
                    />
                    
                    }
                    {props.skill === "Business Analyst" &&
                    <Internskills 
                        pos="Business Analyst"
                        com="Northwestern Mutual"
                        dur="Sep 2018 - Mar 2020"
                        tech1="Microsoft Excel"
                        tech2="Data Analysis"
                        inter1="Team Building"
                        inter2="Time Management"
                    />
                    }
                    {props.skill === "Construction Worker" &&
                    <Internskills 
                        pos="Construction Worker"
                        com="The Boldt Company"
                        dur="Apr 2016 - Sep 2018"
                        tech1="Microsoft"
                        tech2="Blueprint"
                        inter1="Teamwork"
                        inter2="Patience"
                    />
                    }
                </div>
                <Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid></Grid>
                        <Grid item xs={4}></Grid>
                        <Grid className="addSkills">
                            <b><u>Add New Skills</u></b>
                        </Grid>

                        <Grid>
                            <Skillmodal />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    };
    
    export let Skillmodal = () => {
        const [modalIsOpen, setModalIsOpen] = useState(false)
        return (
            <div className="testskillmodal">
                <button onClick={() => setModalIsOpen(true)} className="plusbut">+</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <button className="exit" onClick={() => setModalIsOpen(false)}>X</button>
                    <h2 className="modaltitle">Add Skills</h2>
                    <br/>
                    <br/>
                    <div className="modalbody">
                        <label className="titletext">Search</label>
                        <br/>
                            <div className="search">
                                <Icon className="searchicon" />
                                <input type="text" className="addtitle" placeholder="Skill (ex: Bookkeeping)" className="searchtext" />  
                            </div>                                     
                            <br/>
                            <br/>
        
                        
                        
                    </div>
                    <button className="savebut" onClick={() => setModalIsOpen(false)}>Add</button>
                </Modal>
            </div>
            );
        };
    

        export default App;

    Modal.setAppElement('#root');
    