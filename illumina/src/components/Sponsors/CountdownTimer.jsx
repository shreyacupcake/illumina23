import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Set the target date and time for the countdown
    const targetDate = new Date('2023-06-03T17:51:00').getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Find the distance between now and the target date
      const distance = targetDate - now;

      // Calculate the days, hours, minutes, and seconds remaining
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the countdown string
      // const countdownString = `${hours}h ${minutes}m ${seconds}s`;
      const countdownString = `${minutes}m ${seconds}s`;

      // Update the countdown state
      setCountdown(countdownString);

      // If the countdown is over, clear the interval
      if (distance <= 0) {
        clearInterval(interval);
        setCountdown('Countdown Over');
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='timer'>
      <h1 className='title-countdown'>Final Pitches in:
      <p className='countdown'>{countdown}</p>
      </h1>
    </div>
  );
};

export default CountdownTimer;
