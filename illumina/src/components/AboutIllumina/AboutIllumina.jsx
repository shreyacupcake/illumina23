import React from 'react';
import './AboutIllumina.css';

const AboutIllumina = () => {
  return (
    <header>
      <div className='aboutIllumina'>
        <h1 className='title-about-illumina'>ABOUT ILLUMINA</h1>
        <div className="wrapper">
          <div className='cta'>
            <div className='Logo'><img src="./images/logo.png" width="300" alt="LOGO" style={{ display: 'block', margin: '0 auto' }}/></div>
          </div>
          <div className='content-about-illumina'>
          <p>
          Illumina, the renowned hackathon organized by The Institution of Engineers (India), gathers 
          brilliant minds worldwide to tackle global issues. Teams utilize cutting-edge technology for 
          36 hours, developing groundbreaking solutions. Judges assess ideas based on creativity, feasibility, 
          and impact. The winning team receives a substantial award and a chance to showcase their work. 
          Engage with students, professionals, and industry leaders, supporting innovation and sustainability.
         </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutIllumina;