import React, { useEffect, useState } from 'react';
import './Sponsors.css';
import CountdownTimer from './CountdownTimer';

const Sponsors = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/vanilla-tilt.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header>
      <div className='sponsors'>
        <h1 className='title-sponsors'>SPONSORS</h1>
        <div className="sponsor-cards">
        <a href="https://www.linkedin.com/company/oromcorp/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" class="speaker1">
          <div className="sponsor-tilt" id='orom' data-tilt data-tilt-glare></div>
        </a>
        <a href="https://yoode.com/" target="_blank" rel="noopener noreferrer" class="speaker1">
          <div className="sponsor-tilt" id='yoode' data-tilt data-tilt-glare></div>
        </a>
          <div className="sponsor-tilt" id='aromas' data-tilt data-tilt-glare></div>
        <a href="https://www.skillvertex.com/" target="_blank" rel="noopener noreferrer" class="speaker1">
          <div className="sponsor-tilt" id='skill-vertex'  data-tilt data-tilt-glare></div>
        </a>
        </div>
        {/* <div className="updates">
          <div className="h1">LIVE UPDATES</div>
          <CountdownTimer />
        </div> */}
      </div>
    </header>
  );
};

export default Sponsors;
