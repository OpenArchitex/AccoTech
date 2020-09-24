import './docs.scss';

import React from 'react';

const DocsPage = () => (
  <div className="header-padding">
    <iframe src="../swagger-ui/index.html" width="100%" height="800" title="Swagger UI" seamless style={{ border: 'none' }} />
  </div>
);

export default DocsPage;
