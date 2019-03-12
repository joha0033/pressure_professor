import { Link } from 'gatsby';
import React from 'react';
import '../styles/global.css';

// make dynamic links
const Navigation = () => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
    }}
  >
    <ul className="list-reset flex">
      <li className="mr-12">
        <Link to="/" className="text-blue hover:text-blue-darker" href="/">Home</Link>
      </li>
      <li className="mr-12">
        <Link to="/services/" className="text-blue hover:text-blue-darker" href="/">Services</Link>
      </li>
      <li className="mr-12">
        <Link to="/contact/" className="text-blue hover:text-blue-darker" href="/">Contact</Link>
      </li>
      {/* <li className="mr-12">
        <a className="text-blue hover:text-blue-darker" href="/">Resources</a>
      </li>
      <li className="mr-12">
        <a className="text-blue hover:text-blue-darker" href="/">Contact</a>
      </li> */}
    </ul>
  </div>

);


export default Navigation;
