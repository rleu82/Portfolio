import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100%;
  margin-top: 5em;
  text-align: center;
  p {
    color: var(--black);
  }
`;

const FooterInnerStyles = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FooterInnerStyles>
        <p>&copy; Robert Leu {new Date().getFullYear()}</p>
      </FooterInnerStyles>
    </FooterStyles>
  );
}
