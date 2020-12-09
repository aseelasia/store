import React, { useState , useEffect} from 'react';
import Axios from "axios";
import Slideshow from './Slideshow';
import Carousel from './Carousel.js';


export default function Home() {

  const [men, setMen] = useState([]);
  const [kids, setKids] = useState([]);
  const [women, setWomen] = useState([]);

  useEffect(() => {
    fetch("/1").then(response =>
      response.json().then(data => {
        setMen(data.product);
      })
    );
  }, []);

  useEffect(() => {
    fetch("/2").then(response =>
      response.json().then(data => {
        setKids(data.product);
      })
    );
  }, []);

  useEffect(() => {
    fetch("/3").then(response =>
      response.json().then(data => {
        setWomen(data.product);
      })
    );
  }, []);
  return (
    <>
      <Slideshow />

      <div style={{backgroundColor:"white",}}>
        <Carousel product={men}/> 
      </div>
      <div style={{backgroundColor:"rgba(172, 142, 58, 0.582)"}}>
        <Carousel product={kids}/> 
      </div>
      <div style={{backgroundColor:"white"}}>
        <Carousel product={women}/>
  </div>
      

    </>
    );
}