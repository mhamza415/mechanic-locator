import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MNav from "../../Navigations/MNav";
import MFooter from "../../Components/MFooter";
class MContactUs extends Component {
  state = {};
  render() {
    return (
      <body style={{ backgroundColor: "whitesmoke" }}>
        <MNav></MNav>
        <Container fluid>
          <Row>
            <Col className="col-sm-12 Homeimg ">
              <Col className="col-sm-12">
                <Col className="Aligncenter">
                  <h4 className="heading4white orange">How Can we Help?</h4>
                </Col>
                <Col className="col-sm-12">
                  <Col className="Aligncenter">
                    <h2 className="heading2 white">
                      Online Automobile Services
                    </h2>
                  </Col>
                </Col>
                <Col className="col-sm-12">
                  <Col className="Aligncenter">
                    <p className="heading4white smokewhite">
                      We can connect you best Local Mechanics!
                    </p>
                  </Col>
                </Col>
              </Col>
            </Col>

            <Col className="col-sm-6 Center" style={{ marginTop: 30 }}>
              <h2>Contact Us</h2>
              <h5>Email Us At</h5>
              <p>Mianumerfareed72@gmail.com</p>
              <h5>Call Us</h5>
              <p>03044228402</p>
            </Col>
            <Col className="col-sm-6 Center" style={{ marginTop: 30 }}>
              <h2>Location</h2>
              <p> Mughal Plaza 2nd Floor Office # 25 Muslim Town Lahore </p>
            </Col>
          </Row>
        </Container>
        <MFooter></MFooter>
      </body>
    );
  }
}

export default MContactUs;
