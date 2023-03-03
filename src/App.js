import "./App.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "./assets/logo.svg";
import girlImg from "./assets/image of girl.jpg";
import search from "./assets/search icon.svg";
import microphone from "./assets/microphone.svg";
import logo2 from "./assets/logo 2.svg";
import zigzag from "./assets/zigzag line.png";
import circles from "./assets/circles.png";

function App() {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };
  return (
    <div className="App">
      {/* First container */}
      <Container>
        <Row className="mt-2">
          <Col md={4} class="border m-2">
            <div className="div-main-logo">
              <img src={logo} alt="logo" className="main-logo" />
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
      {/* Second Container */}
      <Container>
        <Row className="mt-2">
          <Col md={6}>
            <Container>
              <h1 className="heading-main">Awake Genius!</h1>
              <h3 className="sub-heading">Ignite your talent, ask anything</h3>
              <h5 className="heading-text">
                Don't be shy, ask away! Tap the button below to write or record
                your question and get the answers you need.
              </h5>
            </Container>
            <Container>
              <div className="d-flex mb-3 mt-5 align-items-center">
                <img
                  src={search}
                  alt=""
                  onClick={toggleDiv}
                  className="search-icon"
                />
                <input
                  type="text"
                  className="img-search"
                  placeholder="Enter your question"
                />
              </div>
              <div className="d-flex align-items-center">
                <img src={microphone} alt="" className="microphone-icon" />
                <input
                  type="text"
                  placeholder="Press the microphone button when you're ready."
                  className="img-search"
                />
              </div>
              {showDiv && (
                <div className="response-div">
                  <p className="response-div-p">Response</p>
                </div>
              )}
            </Container>
          </Col>
          <Col md={6}>
            <div className="bg-img-div">
              <img src={girlImg} alt="logo" className="girl-img" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Third Container */}

      <div className="mt-5 container-two ">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="heading-main-content-two">
            Subscribe to get notified about update
          </h1>
          <div className="position-relative">
            <img src={zigzag} alt="" className="position-absolute zigzag" />
            <h2 className="sub-heading-main-content-two">
              By subscribing with your mail, you will accept our privacy policy
            </h2>
            <img src={circles} alt="" className="position-absolute circles" />
          </div>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="email-class p-3"
            />
            <button className="only-btn">Subscribe us</button>
          </div>
        </div>
        <Container>
          <div className="d-flex align-item-center justify-space-between  bottom-navbar-div">
            <Col md={2} className="">
              <img src={logo2} alt="" />
            </Col>
            <Col md={4} className=""></Col>
            <Col md={6} className="mt-2">
              <div className="">
                <ul className="d-flex">
                  <li className="list-none">Home</li>
                  <li className="list-none">Service</li>
                  <li className="list-none">Price</li>
                  <li className="list-none">Testimonial</li>
                </ul>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
