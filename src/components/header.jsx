import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/global.css';

const Header = ({ siteTitle, siteSubTitle }) => (
  <header

    style={{
      background: 'royalblue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem .5rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}

        </Link>
      </h1>
      <h3
        style={{
          color: 'white',
          textDecoration: 'none',
          paddingLeft: '.25rem',
        }}
      >
        {siteSubTitle}
      </h3>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  siteSubTitle: '',
};

export default Header;
