import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaDev, FaLinkedinIn } from 'react-icons/fa';

const MyIntroStyles = styled.section`
  width: 100%;
  /* max-width: var(--maxSize); */
  background: var(--darkerblue);
  color: var(--white);
  line-height: 1.5;
  text-align: center;
  margin-bottom: 4em;
  padding: 2em 0;
  .inner-intro {
    max-width: 1100px;
    margin: 4em auto;
    padding: 0 2em;
  }
  ul {
    max-width: 200px;
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-items: center;
    margin: 2em auto 1em auto;
  }
`;

export default function MyIntro() {
  return (
    <MyIntroStyles>
      <div className="inner-intro">
        <h1>I am a Self-Taught developer. I used to make your Fried Rice.</h1>
      </div>
      <ul>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaDev />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </MyIntroStyles>
  );
}
