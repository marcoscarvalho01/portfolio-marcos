import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a target="_blank" href="https://www.upwork.com/freelancers/~01584be8824d5cd835"><img src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/marcosvcc/"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/marcosvcc01/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. MarcDev, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
