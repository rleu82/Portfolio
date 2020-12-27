import React from 'react';
import styled from 'styled-components';

const MyIntroStyles = styled.section`
  width: 100%;
  /* max-width: var(--maxSize); */
  background: var(--darkerblue);
  color: var(--white);
  line-height: 1.5;
  text-align: center;
  margin-bottom: 4em;
  padding: 4em 0;
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
        <h1>I am a Self-Taught developer. I used to make your Fried Rice.</h1>
      </div>
    </MyIntroStyles>
  );
}
