import React from "react";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel1.css'


export default function NowPlaying({ movie }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <Container style={{padding:"100px 80px"}}>
      <Row>
        <Slider {...settings}>
          {movie.map(function(movie) {
          return (
            <React.Fragment>
              <Link to={`/movies/${movie.id}`} style={{textDecoration:"none"}}>
                <Col style={{margin:"10px"}}>
                  <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" style={{width:"100%"}}></img>
                    <ListGroup variant="flush">
                      <ListGroup.Item  
                        style={{
                          color:"black",
                          paddingTop: "15px",
                          paddingBottom:"15px",
                          fontFamily: "Times New Roman, Times, serif",
                          fontSize:"20px",
                        }}
                      >
                        {movie.title}
                      </ListGroup.Item>
                      <ListGroup.Item  
                        style={{
                          color:"black",
                          paddingTop: "15px",
                          fontFamily: "Times New Roman, Times, serif",
                          fontSize:"15px",
                        }}
                      >
                        {movie.title}
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              </Link>
            </React.Fragment>
          );
        })}
        </Slider>
      </Row>
        <div style={{
            paddingTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
            }}>
            <button className='btn1'>Learn More</button>
        </div>
</Container>
  );
}
