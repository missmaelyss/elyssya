import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

var style = {
  margin: "auto",
  padding: "auto",
  textAlign: "center",
}

export default function MyNavbar() {
    return (
        <>
          <Navbar bg="light" fixed="top">
            {/* <Nav.Item>
              <img
                src="/elyssya.png"
                width="90"
                className="d-inline-block align-top"
                alt=""
                style={style_img}
              />
            </Nav.Item> */}
            <Nav style={style} className="justify-content-center">
      
              <Nav.Item  style={style}>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item  style={style}>
                <Nav.Link  href="/project">Project</Nav.Link>
              </Nav.Item>
              
              <Nav.Item  style={style}>
                <Nav.Link  href="/experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item  style={style}>
                <Nav.Link  href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </>
      );
  }