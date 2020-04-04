import styled from 'styled-components';

export const WrapperOuter = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  @media (max-width: 414px) {
    height: 400px;
    padding: 178% 0 0;
    padding: 100vh 0 0;
  }
`;

export const WrapperInner = styled.div`
  width: 100%;
  height: 100%;
`;
