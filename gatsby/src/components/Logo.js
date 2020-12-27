import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  font-size: 6px;
  font-size: clamp(3px, 0.5vw, 6px);
  width: 12em;
  height: 12em;
  margin: 0;
  padding: 0;
  --logoBorder: 1em;
  border: var(--logoBorder) solid var(--darkerblue);
  border-radius: 50%;
  display: flex;
  .inner {
    margin: var(--logoBorder);
    flex: 1;
    align-content: center;
    align-items: center;
  }
  h1 {
    align-items: center;
    margin: 0;
    transition: transform 0.4s;
  }
  .letter {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Open Sans', 'Helvetica Neue', 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, sans-serif;
    font-size: 4em;
    font-weight: bold;
    color: var(--darkerblue);
    line-height: 1.2;
    transition: transform 0.4s;
    padding: 0;
    margin: 0;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <h1>
          <span className="letter">R</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
