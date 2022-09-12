
import React from 'react';
import "./App1.css";
import './HeroSection.css';

function HeroSection() {
  return (
<div className='hero-container'>
      <video src="/video-1.mp4" autoPlay loop muted />
      <h1>Find your Perfect Book!</h1>
      <p class="ptag">What are you waiting for?</p>
      <a class="btn btn-light btn-xl" href="#Books"> Search </a>
      {/* <div className='hero-btns'>
         <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Click to Search <i className='far fa-play-circle' /> 
      </div>
        </Button> */}
    </div>
  )}
    export default HeroSection;
