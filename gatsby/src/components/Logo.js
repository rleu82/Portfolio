import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  font-size: 6px;
  font-size: clamp(1px, 0.5vw, 6px);
  width: 12em;
  height: 12em;
  margin: 0;
  padding: 0;
  --logoBorder: 1em;
  border: var(--logoBorder) solid var(--blue);
  display: flex;
  .inner {
    margin: var(--logoBorder);
    flex: 1;
    background: white;
    align-content: center;
    align-items: center;
  }
  h1 {
    align-items: center;
    margin: 0;
    transition: transform 0.4s;
  }
  .letter {
    font-size: 4em;
    font-weight: bold;
    color: var(--blue);
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
