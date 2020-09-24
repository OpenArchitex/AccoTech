import React from "react";
import  { Jumbotron, Button, Container }  from "reactstrap";
import './jumbotron.scss';
import { Link } from 'react-router-dom';

const JumbotronElement = () => {
  return (
    <Jumbotron fluid id="jumbotron">
      <div className="overlay"/>
      <video autoPlay loop muted>
        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
      </video>
      <div className="container h-100 text-container">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-3">AccoTech Accounting</h1>
            <p className="lead mb-0">
              <q>Don&rsquo;t ever let your business get ahead of the financial side of your business. Accounting, accounting, accounting. Know your numbers.</q>
            </p>
            <br/>
            <p>&#8275; Tilman J. Fertitta &#8275;</p>
            <Container>
              <Button color="info" className="mt-3" tag={Link} to='#services'>Learn More</Button>
              {' '}
              <Button color="info" className="mt-3" tag={Link} to='#contact-us'>Contact Us</Button>
            </Container>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default JumbotronElement
