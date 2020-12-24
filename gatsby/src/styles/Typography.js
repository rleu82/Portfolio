import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  html {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    color: var(--black);
    font-weight: 400;
  }

  p, li {
    letter-spacing: 0.5px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    font-weight: 600;
    margin: 0;
  }

  a {
    color: var(--black);
    text-decoration-color: var(--red);
    text-decoration-skip-ink: none;
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
