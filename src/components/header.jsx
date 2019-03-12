/* eslint-disable max-len */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/global.css';

const Header = ({ siteTitle, siteSubTitle }) => (
  <header

    style={{
      // display: 'grid',
      // gridTemplateColumns: 'repeat(2, 1fr)',
      // gridAutoRows: 'minmax(100px, auto)',
      background: 'royalblue',
      marginBottom: '1.45rem',
    }}
  >

    {/* LEFT SIDE */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem ',
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
    {/* RIGHT SIDE */}
    {/* <div
      style={{
        justifyContent: 'center',
        margin: '0 auto',
        maxWidth: 960,
        padding: '2.5rem 1.0875rem .5rem',
      }}
    >
      <button type="button" className="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">
        Get a Quote!
      </button>
    </div> */}

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
