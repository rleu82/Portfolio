import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">about</Link>
        </li>
      </ul>
    </nav>
  );
}
