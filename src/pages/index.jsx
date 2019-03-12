import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import '../styles/global.css';

const IndexPage = () => (
  <Layout>
    <ul className="list-reset flex">
      <li className="mr-12">
        <a className="text-blue hover:text-blue-darker" href="/">Home</a>
      </li>
      <li className="mr-12">
        <a className="text-blue hover:text-blue-darker" href="/">Services</a>
      </li>
      <li className="mr-12">
        <a className="text-blue hover:text-blue-darker" href="/">Gallery</a>
      </li>
      <li className="mr-12">
        <a className="text-blue hover:text-blue-darker" href="/">Resources</a>
      </li>
      <li className="mr-12">
        <a className="text-blue hover:text-blue-darker" href="/">Contact</a>
      </li>
    </ul>

    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h2>Lesson 101</h2>
    <p className="container">
      The Pressure Professor (formerly Whyte Wash Pressure Cleaning)
      has served the Jacksonville area since 1993. We have over a
      thousand satisfied customers, both residential and commercial.
      Our service can provide your pressure cleaning needs with confidence.
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
