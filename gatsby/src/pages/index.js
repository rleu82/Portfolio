import React from 'react';
import styled from 'styled-components';
import Info from '../components/Info';
import MyIntro from '../components/MyIntro';
import Projects from '../components/Projects';

const FlexSite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  width: 100%;
`;

export default function Homepage() {
  return (
    <FlexSite>
      <MyIntro />
      <Projects />
      <Info />
    </FlexSite>
  );
}
