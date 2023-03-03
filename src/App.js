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
        <Row className="mt-5">
          <Col md={4} class="border m-2">
            <img src={logo} alt="logo" />
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
      {/* Second Container */}
      <Container>
        <Row className="mt-5">
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
              <div className="d-flex m-2 mt-5">
                <img src={search} alt="" onClick={toggleDiv} />
                <input
                  type="text"
                  className="img-search"
                  placeholder="Enter your question"
                />
              </div>
              <div className="d-flex">
                <img src={microphone} alt="" />
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
          <Col md={6} class="border">
            <img src={girlImg} alt="logo" />
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
          <div className="d-flex align-item-center justify-space-between mt5 bottom-navbar-div">
            <Col md={2} className="">
              <img src={logo2} alt="" />
            </Col>
            <Col md={4} className=""></Col>
            <Col md={6} className="mt-2">
              <div className="d-flex">
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
