import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

import '../styles/global.css';

const IndexPage = () => (
  <Layout>


    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Lesson 101</h1>
    <p className="container">
    In the warm and moist climate we enjoy in Florida the potential for mold,
    mildew and algae growth is a fact of life. The visual appearance of your home,
    decks, fences, drives and walkways is diminished. There is some indication
    that the discoloration caused by mold and algae on your roof may also increase
    attic temperature resulting in higher cooling expense and potentially reduce
    the life of your roof due to higer temperatures. With a pressure cleaning your
    home will have a fresh new appearance that may save a costly painting job. Your
    roof cleaning will provide visual appeal and may also help prolong the life of
    your roof.
    </p>


    <h3>
      The Professor
    </h3>
    <p className="container">
      The Pressure Professor (formerly Whyte Wash Pressure Cleaning)
      has served the Jacksonville area since 1993. We have over a
      thousand satisfied customers, both residential and commercial.
      Our service can provide your pressure cleaning needs with confidence.
    </p>

    <p>
    The Pressure Professor can clean a variety of building surfaces including
    concrete block, brick, vinyl siding. wood and metal. We also clean and treat
    walkways, drives, curbing of concrete, painted surfaces, pavers and wood decking.
    </p>
    <p>Now let The Professor make your place look great!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
