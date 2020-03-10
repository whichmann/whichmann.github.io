import React from "react";
import Paper from "@material-ui/core/Paper";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import UslugiPhoto from "./../media/uslugi.png";

const Uslugi = () => {
  return (
    <Container>
      <Row>
        <Col sm={3}>
          <Paper>
            <h5>
              mgr inż. ADAM PONIATOWSKI
              <br />
              kierownik budowy, projektant, <br />
              inspektor nadzoru inwestorskiego
              <br />
              uprawnienia bez ograniczeń w branży konstrukcyjno-budowlanej
            </h5>
          </Paper>
        </Col>
        <Col sm={9}>
          <img
            className={"uslugi-photo"}
            src={UslugiPhoto}
            alt={"uslugi"}
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Uslugi;
