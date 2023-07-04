import React from 'react'
import "./AboutIEI.css"
import Carousel from './Carousel'

const AboutIEI = () => {
  return (
    <header>
          <link href='https://use.fontawesome.com/releases/v5.11.2/css/all.css'/>
    <div className='aboutIEI'>
      <h1 className='title-about-iei'>ABOUT IE(I)</h1>
      <div className="container">
        <Carousel>
          <img src='./images/1.png' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/2.png' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/3.png' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/4.png' alt='' style={{width: "100%", height: "100%"}}></img>
          <img src='./images/5.png' alt='' style={{width: "100%", height: "100%"}}></img>
        </Carousel> 
      </div>
      <div className='content-about-iei'>
        <p>
          The Institution of Engineers (India) is a prestigious non-profit organization established in 1920. 
          Our mission is to advance engineering, technology, and their practical applications. 
          As the world's largest professional association of engineers, we employ innovative strategies
          to promote sustainable development. At VIT, our IE(I) student chapter serves as a platform 
          for comprehensive technical and non-technical growth, organizing diverse events and activities.
        </p>
      </div>
      </div>
  </header>
  )
}

export default AboutIEI
