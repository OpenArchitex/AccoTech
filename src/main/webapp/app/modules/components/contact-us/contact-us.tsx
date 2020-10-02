import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './contact-us.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
  return (
    <Container className="mt-5 mb-5" id="contact-us">
      <Row>
        <Col className="col-12 text-center">
          <h1>Give Us a Call</h1>
          <p className="mt-3">Let us simplify your accounting!</p>
          <Row>
            <Col className="col-xs-12 col-sm-4 offset-sm-2 text-center">
              <div className="mb-3 mt-3 text-center">
                <FontAwesomeIcon icon="phone" size="2x" />
              </div>
              <a href="tel:+1 888 343-1234">+1 888 123-4567</a>
            </Col>
            <Col className="col-xs-12 col-sm-4 text-center">
              <div className="mb-3 mt-3 text-center">
                <FontAwesomeIcon icon={['far', 'envelope']} size="2x" />
              </div>
              <a href="mailto:support@accotech.com">support@accotech.com</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
