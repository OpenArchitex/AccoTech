import React from "react";
import  { Jumbotron }  from "reactstrap";
import './jumbotron.scss';

const JumbotronElement = () => {
  return (
    <Jumbotron fluid id="jumbotron">
      <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
      </video>
      <div className="container h-100 text-container">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-3">AccoTech</h1>
            <p className="lead mb-0">
              <q>This is a question too difficult for a mathematician. It should be asked of a philosopher.</q>
            </p>
            <br/>
            <p>&#8275; Albert Einstein (when asked about completing his income tax form) &#8275;</p>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default JumbotronElement
