import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
