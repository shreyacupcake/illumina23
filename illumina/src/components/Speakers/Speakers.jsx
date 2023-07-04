import React, { useEffect } from 'react';
import './Speakers.css';

const Speakers = () => {
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
      <div className='speakers'>
        <h1 className='title-speakers'>SPEAKERS</h1>
        <div className='cards'>
        <a href="https://www.linkedin.com/in/hariomshandilya/" target="_blank" rel="noopener noreferrer" class="speaker1">
          <div className='tiltcard' id='speaker1' data-tilt data-tilt-glare data-tilt-max="10">
          </div>
        </a>
        <a href="https://www.linkedin.com/in/sasmita-singh-37b0251b3/" target="_blank" rel="noopener noreferrer" class="speaker2">
          <div className='tiltcard' id='speaker2' data-tilt data-tilt-glare data-tilt-max="10">
          </div>
        </a>
        <a href="https://www.linkedin.com/in/braham-aggarwal-7a08b8209/" target="_blank" rel="noopener noreferrer" class="speaker2">
          <div className='tiltcard' id='speaker3' data-tilt data-tilt-glare data-tilt-max="10">
          </div>
        </a>
        </div>
      </div>
    </header>
  );
};

export default Speakers;