import { media } from '@/styles/mediaQuery';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

/* -------------------------------------------------------------------------------------------------
 * AccountLayout -> 계정관련 레아아웃 (sign up 화면, login 화면, 비밀번호 찾기 화면)
 * -----------------------------------------------------------------------------------------------*/

const AccountLayout = () => {
  return (
    <Wrapper>
      <Panel>
        <Toaster position="top-right" />
        <LogoSection>
          <h1>In it</h1>
          <p>코드리뷰 사이트: in it()</p>
        </LogoSection>
        <Outlet />
      </Panel>
    </Wrapper>
  );
};

export default AccountLayout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(
    -70deg,
    ${({ theme }) => theme.primary2Color} 55%,
    ${({ theme }) => theme.backgrondDarkColor} 45%
  );
  ${media.tablet} {
    background: ${({ theme }) => theme.backgrondDarkColor};
  }
`;

const Panel = styled.div`
  width: 60%;
  max-width: 60em;
  height: 40em;
  margin: 0 auto;
  padding: 2em 5em;
  display: flex;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  ${media.tablet} {
    width: fit-content;
    padding: 1em 2em;
    background: ${({ theme }) => theme.primary2Color};
    flex-direction: column;
  }
  ${media.mobile} {
    width: 70%;
  }
`;

const LogoSection = styled.div`
  width: calc(100% - 20em);
  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin: 2em 0 0;
    color: ${({ theme }) => theme.pointColor};
  }
  p {
    font-size: 0.9rem;
    font-weight: 800;
    color: ${({ theme }) => theme.pointColor};
  }
  ${media.tablet} {
    width: 100%;
    h1 {
      font-size: 4rem;
      font-weight: 800;
      margin: 2em 0 0;
      color: ${({ theme }) => theme.backgrondDarkColor};
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 3em;
      font-weight: 800;
      color: ${({ theme }) => theme.backgrondDarkColor};
    }
  }
`;
