import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../../images/slide1.jpg';
import img2 from '../../../images/slide2.jpg';
import img3 from '../../../images/slide3.jpg';
import { Link } from 'react-router-dom';

const slideImages = [
  img1,
  img2,
  img3
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,width:"100%"}} >
              <div className="slideText">
                <span>Women Fashion</span>
                <h3>The Seasonal Special</h3>
                <h5>Welcom to our online store, where offer top quality<br/>merchandise at unbeatable price<br/>
                Can't find what you're looking for? <Link to ="ContactUs" style={{color:"black",textDecoration:"none"}}>Contact us</Link></h5>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,width:"100%"}}>
              <div className="slideText">
                <span>Men Fashion</span>
                <h3>The Seasonal Special</h3>
                <h5>Welcom to our online store, where offer top quality<br/>merchandise at unbeatable price<br/>
                Can't find what you're looking for? <Link to ="ContactUs" style={{color:"black",textDecoration:"none"}}>Contact us</Link></h5>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,width:"100%"}}>
              <div className="slideText">
                <span>Kids Fashion</span>
                <h3>The Seasonal Special</h3>
                <h5>Welcom to our online store, where offer top quality<br/>merchandise at unbeatable price<br/>
                Can't find what you're looking for? <Link to ="ContactUs" style={{color:"black",textDecoration:"none"}}>Contact us</Link></h5>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;