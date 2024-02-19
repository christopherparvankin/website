import React from "react";
import '../styles/About.css';
import chris from '../assets/chris.JPG'

const p1 = "Hello, I'm Chris."
const p2 = "Now at Brown, I'm studying Applied Math-Computer Science."
const p3 = "I grew up in a quiet hamlet, about an hour ouside of Portland, Oregon." 
const p4 = "In my spare time, I enjoy watching movies, going on bike rides, and perusing Facebook Marketplace!"
const p5 = "Before college, I spent a year in Rhode Island supporting a local Providence public school through City Year Providence."



function About() {

  return (
    <div className="about_body">
    <div className="about">
      
        <div className="title_row">
        About Me
        </div>

        <div >
   
    <img src={chris} alt="chris?" style={{ float: 'left', width: '24vw', marginRight: '1vw' }} />
          <div className="description">
            Local Village Boy Obtains Entry in NYC Half Marathon (Colorized)
          </div>
          <div className="biop" >{p1}</div>
          <div className="biop">{p3}</div>
          <div className="biop">{p5}</div>
          <div className="biop" >{p2}</div>
          <div className="biop">{p4}</div>
        </div>
    
    </div>
    </div>
  );
}

export default About;
