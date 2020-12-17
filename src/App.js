import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
          <Navbar.Brand href="#">Riyad Sarsour</Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="#home" className="sticky-top ">
            <Nav.Item>
              <Nav.Link href="#Home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Work">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        <Card>
          <Header />
        </Card>
        <Container>
          <About />
        </Container>
        <Work />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
