import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './team.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Team = () => {
  return (
    <Container className="mt-5 mb-5" id="team">
      <Row className="justify-content-center">
        <Col className="col-md-7 text-center">
          <h1 className="mb-3">Experienced & Professional Team</h1>
          <h6 className="subtitle mb-5">
            You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in
            no-time
          </h6>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-6">
          <Row>
            <Col className="col-md-12 text-center">
              <img src="../../../content/images/team-member1.png" alt="team-member1" className="img-fluid rounded-circle team-member" />
              <div className="pt-2">
                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                <h6 className="subtitle mb-3">Property Specialist</h6>
                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="text-decoration-none d-block px-1">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-decoration-none d-block px-1">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-decoration-none d-block px-1">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="col-md-12 text-center">
              <img src="../../../content/images/team-member2.png" alt="team-member2" className="img-fluid rounded-circle team-member" />
              <div className="pt-2">
                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                <h6 className="subtitle mb-3">Property Specialist</h6>
                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="text-decoration-none d-block px-1">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-decoration-none d-block px-1">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-decoration-none d-block px-1">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
