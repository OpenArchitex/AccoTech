import './footer.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ListGroup, ListGroupItem } from 'reactstrap';

const Footer = () => (
  <footer>
    <div className="container-fluid">
      <div className="mt-3 text-center">
        <div className="row">
          <div className="mx-auto">
            <ListGroup horizontal>
              <ListGroupItem className="border-0"><a aria-label="facebook" style={{color: "inherit"}} href="https://www.facebook.com/acco-tech/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></a></ListGroupItem>
              <ListGroupItem className="border-0"><a aria-label="instagram" style={{color: "inherit"}} href="https://www.instagram.com/acco-tech/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x"/></a></ListGroupItem>
              <ListGroupItem className="border-0"><a aria-label="twitter" style={{color: "inherit"}} href="https://www.twitter.com/acco-tech/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/></a></ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <p>
          <small>
            Powered by <a href="https://github.com/OpenArchitex" target="_blank" rel="noopener noreferrer">OpenArchitex</a>
            &copy;{new Date().getFullYear()}. Code licensed under an {` `}
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.
          </small>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
