/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact</h1>
    <p>
        Please feel free to contact us for a quote
        or with any questions you may have about pricing or services.
    </p>
    <p>Owner: James Stringer</p>
    <p>Work number: (904) 860-4137</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
