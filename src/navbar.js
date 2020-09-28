import React from "react"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function MyNavbar() {
    return (
        <>
          <Navbar bg="light">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  href="/project">Project</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  href="/experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </>
      );
  }