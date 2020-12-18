/* eslint-disable react/prop-types */
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
// global reset css , global and typography
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
