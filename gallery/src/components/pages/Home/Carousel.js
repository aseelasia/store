import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Playing({ product }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    autoplay: true,
  };
  return (
    <Container style={{padding:"100px 80px"}}>
      <Row>
        <Slider {...settings}>
          {product.map(function(product) {
          return (
            <React.Fragment>
              <Link to={`/items/${product.id}`} style={{textDecoration:"none"}}>
                <Col style={{margin:"10px"}}>
                  <div className="card">
                  <img src={`data:image/jpg;base64,${product.image}`} alt="" style={{width:"100%"}}/>
                    <ListGroup variant="flush">
                      <ListGroup.Item  
                        style={{
                          color:"black",
                          paddingTop: "15px",
                          paddingBottom:"15px",
                          fontFamily: "Times New Roman, Times, serif",
                          fontSize:"20px",
                          borderBottom:"solid"
                        }}
                      >
                        {product.productName}
                      </ListGroup.Item>
                      <ListGroup.Item  
                        style={{
                          color:"black",
                          paddingTop: "15px",
                          fontFamily: "Times New Roman, Times, serif",
                          fontSize:"15px",
                        }}
                      >
                        {product.price} ₪
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
</Container>
  );
}