import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <Container className="mt-5 mb-5" id="services">
      <div className="text-center">
        <h1>Welcome to AccoTech!</h1>
      </div>
      <Row>
        <p className="p-3">
          Accounting matters shouldn&rsquo;t be complicated. In fact we believe that everyone should be able to meet their accounting needs
          in a timely and stress free manner. We started AccoTech with the mission of helping simplify your accounting needs whether you are
          a business or an individual. We provide a wide variety of services including Customized Tax Preparation, CRA/IRS Representation
          and Financial Guidance for small and large scale businesses.
        </p>
      </Row>
      <Row>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fas', 'file-invoice']} color="#A0D3FF" size="2x" />
              <h2 className="p-2">Accounting Services</h2>
            </div>
            <p>
              Has over 50 years of experience serving middle market companies. As an independent registered public accounting firm, AccoTech
              provides accounting services to hundreds of companies. The Firm is also one of the top 20 accounting and advisory firms in the
              country, providing services to privately-owned national firms as well as local businesses.
            </p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fas', 'file-invoice-dollar']} color="#A0D3FF" size="2x" />
              <h2 className="p-2">Tax Preparation</h2>
            </div>
            <p>
              Has over 50 years of experience serving middle market companies. As an independent registered public accounting firm, AccoTech
              provides accounting services to hundreds of companies. The Firm is also one of the top 20 accounting and advisory firms in the
              country, providing services to privately-owned national firms as well as local businesses.
            </p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fas', 'people-arrows']} color="#A0D3FF" size="2x" />
              <h2 className="p-2">Staffing Services</h2>
            </div>
            <p>
              Has over 50 years of experience serving middle market companies. As an independent registered public accounting firm, AccoTech
              provides accounting services to hundreds of companies. The Firm is also one of the top 20 accounting and advisory firms in the
              country, providing services to privately-owned national firms as well as local businesses.
            </p>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['far', 'building']} color="#A0D3FF" size="2x" />
              <h2 className="p-2">Business Registration</h2>
            </div>
            <p>
              Has over 50 years of experience serving middle market companies. As an independent registered public accounting firm, AccoTech
              provides accounting services to hundreds of companies. The Firm is also one of the top 20 accounting and advisory firms in the
              country, providing services to privately-owned national firms as well as local businesses.
            </p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fas', 'exclamation-circle']} color="#A0D3FF" size="2x" />
              <h2 className="p-2">Notice to Reader</h2>
            </div>
            <p>
              Has over 50 years of experience serving middle market companies. As an independent registered public accounting firm, AccoTech
              provides accounting services to hundreds of companies. The Firm is also one of the top 20 accounting and advisory firms in the
              country, providing services to privately-owned national firms as well as local businesses.
            </p>
          </Container>
        </Col>
        <Col>
          <Container>
            <div className="text-center">
              <FontAwesomeIcon icon={['fas', 'user-shield']} color="#A0D3FF" size="2x" />
              <h2 className="p-2">CRA/IRS Representation</h2>
            </div>
            <p>
              Has over 50 years of experience serving middle market companies. As an independent registered public accounting firm, AccoTech
              provides accounting services to hundreds of companies. The Firm is also one of the top 20 accounting and advisory firms in the
              country, providing services to privately-owned national firms as well as local businesses.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
