import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

const InfoStyles = styled.div`
  width: 100%;
  max-width: var(--maxSize);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 2em;
  .hidden {
    display: none;
  }
  span {
    font-weight: bold;
  }
  h3 {
    margin-bottom: 1.5rem;
  }
  .recentitems {
    margin: 0 2rem;
  }
`;

export default function Info() {
  return (
    <InfoStyles>
      <ContactForm />
      <Contacts />
    </InfoStyles>
  );
}
