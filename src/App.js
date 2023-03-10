import "./App.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "./assets/logo.svg";
import girlImg from "./assets/image of girl.jpg";
import search from "./assets/search icon.svg";
// import microphone from "./assets/microphone.svg";
import logo2 from "./assets/logo 2.svg";
import zigzag from "./assets/zigzag line.png";
import circles from "./assets/circles.png";

import axios from "axios";

function App() {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://navitutor.com/query",
        { query: input },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      var answer = response.data.answers[0].answer;
      setResponse(answer);
      console.log(answer);
      if (answer) {
        toggleDiv();
      }
      setLoading(false);
    } catch (error) {
      console.error(error); // handle error
      setResponse("Temporary OpenAI outage, Please try again shortly.");
      setLoading(false);
    }
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
            {/* <p>{answer}</p> */}
            {/* Dummy code
            <div className="container mt-2">
              <h2>React HTTP Post Request Example</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-2 mt-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    onChange={(event) => {
                      createUser(event.target.value);
                    }}
                    value={data}
                  />
                </div>
                <button type="submit" className="btn btn-danger">
                  Create
                </button>
              </form>
            </div> */}
            <Container>
              <form onSubmit={handleSubmit}>
                <div className="d-flex mb-3 mt-5 align-items-center">
                  {/* <img src={search} alt="" className="search-icon" /> */}
                  <button type="submit" className="btn-search-icon">
                    <img src={search} alt="" className="search-icon" />
                  </button>
                  <input
                    type="text"
                    placeholder="Explain back propagation to me"
                    className="img-search"
                    value={input}
                    onChange={handleInputChange}
                  />
                </div>
              </form>

              {/* <div className="d-flex align-items-center">
                <img src={microphone} alt="" className="microphone-icon" />
                <input
                  type="text"
                  placeholder="Press the microphone button when you're ready."
                  className="img-search"
                />
              </div> */}
              {loading ? <p>Loading...</p> : response && <p>Data loaded </p>}
              {showDiv && (
                <div className="response-div">
                  <p className="response-div-p">{response}</p>
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
