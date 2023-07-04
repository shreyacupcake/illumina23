import React from 'react'
import "./Prizes.css"

const Prizes = () => {
  return (
    <header>
    <div className='prizes'>
        <h1 className='title-prizes'>PRIZES</h1>
    <div className="big-prizes">
      <div className="second">
        <img src='./images/silver.png' alt='' style={{width: "65%", height: "65%"}}></img>
        <div className="prize-text">Second<br />Place</div>
        </div>
      <div className="first"><img src='./images/gold.png' alt='' style={{width: "70%", height: "70%"}}></img>
      <div className="prize-text">First<br />Place</div>
      </div>
      <div className="third"><img src='./images/bronze.png' alt='' style={{width: "60%", height: "60%"}}></img>
      <div className="prize-text">Third<br />Place</div>
      </div>
    </div>
    <div className="gap"></div>
    <div className="small-prizes">
      <div className="uiux"><img src='./images/uiux.png' alt='' style={{width: "50%", height: "50%"}}></img>
      <div className="prize-text">Best<br />UI/UX</div>
      </div>
      <div className="pitch"><img src='./images/pitch.png' alt='' style={{width: "50%", height: "50%"}}></img>
      <div className="prize-text">Best<br />Pitch</div>
      </div>
      <div className="freshers"><img src='./images/freshers.png' alt='' style={{width: "50%", height: "50%"}}></img>
      <div className="prize-text">Best<br />Freshers</div>
      </div>
    </div>
    </div>
  </header>
  )
}

export default Prizes