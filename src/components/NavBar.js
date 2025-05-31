import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';
// Remove Router import - we don't need it here

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    // Remove the Router wrapper here
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('home');
                scrollToSection('home');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('skills');
                scrollToSection('skills');
              }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => {
                onUpdateActiveLink('projects');
                scrollToSection('projects');
              }}
            >
              Projects (soon)
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~01584be8824d5cd835"><img src={navIcon1} alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marcosvcc/"><img src={navIcon2} alt="" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marcosvcc01/"><img src={navIcon3} alt="" /></a>
            </div>
            <HashLink to='#connect'>
              <button className="vvd"><span>Let's Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}