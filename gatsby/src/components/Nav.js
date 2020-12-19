import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-bottom: 4rem;
  a {
    font-size: 2rem;
    text-decoration: none;
    &:hover {
      color: var(--blue);
    }
  }
  ul {
    margin-top: 3rem;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    text-align: center;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">portfolio</Link>
        </li>
        <li>
          <Link to="/">Robert</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
