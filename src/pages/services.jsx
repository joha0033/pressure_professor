import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services</h1>
    <p>
The services listed are the most popular for residential cleaning.
        If you need other cleaning services we can accomodate almost
        anything that can be cleaned with normal pressure cleaning processes.
    </p>
    <h3>
        House
    </h3>
    <p>
    Clean your whole house from eaves to ground. Exterior windows will also be
    cleaned during this process. Included with the house cleaning we surface
    clean your standard four car driveway and include walkway to your door
    </p>
    <h3>
        Driveway and Walkways
    </h3>
    <p>
    All surfaces are cleaned to remove discoloration due to mold, mildew and algae.
    All surfaces are treated after cleaning to help inhibit the return growth.
    </p>

    <p>
      <small>
        <bold>NOTE: </bold>
            Typical cleaning will not remove rust stains.
            Please let our operator know if you have other stains and we can provide
            information on cleaning requirements.
      </small>
    </p>

    <h3>
    No Pressure Roof Cleaning
    </h3>
    <p>
        The Pressure Professor uses NO pressure on roof cleaning. There is a three step process to
        initiate the cleaning process with chemical treatment. To complete the process
        the roof is throughly rinsed. We offer an annual roof maintenance for our roof
        cleaning customers at a great savings to the initial cleaning. The maintenance
        must be performed annually.
    </p>
    <h3>
        Pool Deck/Wood Deck/Screened Enclosures
    </h3>
    <p>
        These services will clean any existing mildew or algae and will remove debris
        from deck areas, pool coping, and top of enclosures. We can also prepare
        wooden decks for preservative re-treatment.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
