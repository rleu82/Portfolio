import React from 'react';
import styled from 'styled-components';

const MyIntroStyles = styled.section`
  width: 100%;
  /* max-width: var(--maxSize); */
  background: var(--darkerblue);
  color: var(--white);
  height: 50vh;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 4em;
  .inner-intro {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2em;
  }
`;

export default function MyIntro() {
  return (
    <MyIntroStyles>
      <div className="inner-intro">
        <h1>Robert Leu</h1>
        <h2>LEARN | HELP OTHERS | DO AWESOME STUFF</h2>
        <p>
          I view coding as an outlet to express creativity, as a tool to help
          others find solutions for problems, and a way for me to continually
          learn and grow.
        </p>
      </div>
    </MyIntroStyles>
  );
}
