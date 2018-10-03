import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultProfile from '../../media/defaultProfile.png';

export default function Header() {
  return (
    <div className="header-outer">
      <span className="header-menu">
        <h3>
          Menu
          <FontAwesomeIcon icon="bars" style={{ position: 'relative', top: '2px' }} />
        </h3>
      </span>
      <span className="header-title">
        <h1>Same Page</h1>
      </span>
      <span className="header-profile">
        <img className="header-img" src={defaultProfile} alt="profile" />
      </span>
    </div>
  );
}
