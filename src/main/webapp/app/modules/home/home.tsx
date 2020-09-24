import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import JumbotronElement from "app/modules/components/jumbotron/jumbotron";
import Services from "app/modules/components/services/services";
import ContactUs from "app/modules/components/contact-us/contact-us";
import Team from "app/modules/components/team/team";

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <JumbotronElement/>
      <Services/>
      <hr/>
      <Team/>
      <hr/>
      <ContactUs/>
      <hr/>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
