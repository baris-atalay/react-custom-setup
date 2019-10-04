import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components'

const StyledSpan = styled.span`
  color: #ff0000;
`

const App = ({ name }) => {
  return <div>Hello test <StyledSpan>{name}</StyledSpan></div>;
}

export default hot(module)(App);
