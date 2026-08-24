import React from 'react';

const ConstructionBanner = () => (
  <header className="construction-banner" role="status">
    <div className="construction-banner__inner">
      <span className="construction-banner__marker" aria-hidden="true" />
      <p>
        <strong>Website under construction.</strong>
        <span> Project details and media are still being refined.</span>
      </p>
    </div>
  </header>
);

export default ConstructionBanner;
