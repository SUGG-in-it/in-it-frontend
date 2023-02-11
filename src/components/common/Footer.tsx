import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright 2022. SUGG. all rights reserved.</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  p {
    color: ${({ theme }) => theme.pointColor};
  }
`;

export default Footer;
