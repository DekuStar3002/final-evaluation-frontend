import PropTypes from 'prop-types';
import React from 'react';
import './Header.css';

function Header({pageName}) {
  return (
    <div className='header'>
      <div className='header-left'>
        <p>CMS+</p>
      </div>
      <div className='header-right'>
        <p>{pageName}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired
};

export default Header;