import React from 'react';
import '../styles/Home.css';
const p1 = "Christopher Parvankin";
const p3 = "AmeriCorps Alumnus | Brown University Student";

function Home() {
  return (
    <div className='home'>
      <div className="home-container">
     
          <div className="l1">
            {p1}
          </div>
        
          <div className='l2'>
            {p3}
          </div>
    </div>
    </div>
  )};


export default Home;