import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  text-align: center;
  max-width: 100%;
  margin-bottom: 10rem;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
    &:hover {
      color: var(--blue);
    }
  }
  ul {
    margin-top: 7rem;
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 2rem;
    align-items: center;
    justify-items: center;
  }
`;

const NavInnerStyles = styled.div`
  max-width: 500px;
  margin: 0 auto 0 auto;
`;

export default function Nav() {
  return (
    <NavStyles>
      <NavInnerStyles>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">portfolio</Link>
          </li>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </NavInnerStyles>
    </NavStyles>
  );
}
