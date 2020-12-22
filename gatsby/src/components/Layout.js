import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Nav from './Nav';
// global reset css , global and typography
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteStyles = styled.div`
  max-width: 1100px;
  margin: 2rem auto 2rem auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteStyles>
        <Nav />
        {children}
        <Footer />
      </SiteStyles>
    </>
  );
}
