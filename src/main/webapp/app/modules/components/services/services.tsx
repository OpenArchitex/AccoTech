import React from "react";
import  { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button }  from "reactstrap";
import './services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <Container className="mt-5 mb-5" id="services">
      <div className="text-center"><h1>Welcome to AccoTech!</h1></div>
      <Row>
        <p className="p-3">
          Accounting matters shouldn&rsquo;t be complicated. In fact we believe that everyone should be able to meet their accounting needs in a timely and
          stress free manner. We started AccoTech with the mission of helping simplify your accounting needs whether you are a business or an
          individual. We provide a wide variety of services including Customized Tax Preparation, CRA/IRS Representation and Financial Guidance for small and
          large scale businesses.
        </p>
      </Row>
      <Row>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
              <h2 className="p-2">Card title</h2>
            </div>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
              <h2 className="p-2">Card title</h2>
            </div>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
              <h2 className="p-2">Card title</h2>
            </div>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
              <h2 className="p-2">Card title</h2>
            </div>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
              <h2 className="p-2">Card title</h2>
            </div>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
              <h2 className="p-2">Card title</h2>
            </div>
            <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
