import './App.css';
import { LandingPage, AboutIllumina, AboutIEI, Speakers, Timeline, Prizes, Sponsors, ContactUs, Navbar} from "./components"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="AllComponents">
      <Parallax pages={8} style={{ top: '0', left: '0' }} className="animation">

        {/* NAVBAR GOES HERE */}

        <div className="topSection">
          <div className="background-div"></div>
          <div className="parallax-layers-container">
            <div className='title'>
              <h1 id='title-text'>ILLUMINA</h1>
              <a href="https://illumina23.devpost.com/" target="_blank" rel="noopener noreferrer" className="register">
                {/* <button className='curved-button'>Hack Live!</button> */}
              </a>
            </div>
        

        <ParallaxLayer offset={0} speed={0.01}>
          <div class="animation_layer parallax" id="auroraB"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="front6"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.48}>
          <div class="animation_layer parallax" id="front5"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="front4"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.16}>
          <div class="animation_layer parallax" id="front3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="front2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.31}>
          <div class="animation_layer parallax" id="front1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.36}>
          <div class="animation_layer parallax" id="treesF"></div>
        </ParallaxLayer>
        </div>
        </div>
        <LandingPage />
        <AboutIllumina />
        <AboutIEI />
        <Speakers />
        <Timeline />
        <Prizes />
        <Sponsors />
        {/* <Updates /> */}
        <ContactUs />
      </Parallax>

    </div>
  );
}

export default App;