import React from 'react';
import styled from 'styled-components';

const WelcomeDiv = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled.h3`
  text-align: center;
`;

function Welcome(props) {
  return (
    <WelcomeDiv>
      <Title>Welcome to React Virtual Desktop</Title>
      <p>
        React Virtual Desktop allows you to use your browser like a simplified
        OS.
      </p>

      <h4>Source Code</h4>
      <p>
        React Virtual Desktop is open source, visit the{' '}
        <a href="https://github.com/GuillaumeCailhe/ReactVirtualDesktop">
          Github page
        </a>
        .
      </p>

      <h4>Contact</h4>
      <p>
        For any suggestion, bug, question or love declaration, feel free to{' '}
        <a href="https://github.com/GuillaumeCailhe/ReactVirtualDesktop/issues">
          leave an issue on Github
        </a>{' '}
        or contact me directly via{' '}
        <a href="http://www.guillaume-cailhe.com/">my website</a>.
      </p>
      <h4>Have fun !</h4>
    </WelcomeDiv>
  );
}

export default Welcome;
