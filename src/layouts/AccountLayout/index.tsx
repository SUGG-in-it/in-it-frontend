import { PrimaryColor } from '@/assets/colors';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

/* -------------------------------------------------------------------------------------------------
 * AccountLayout -> 계정관련 레아아웃 (sign up 화면, login 화면, 비밀번호 찾기 화면)
 * -----------------------------------------------------------------------------------------------*/

const AccountLayout = () => {
  return (
    <Wrapper>
      <Panel>
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
  background: linear-gradient(-70deg, ${PrimaryColor} 55%, #fff 45%);
`;

const Panel = styled.div`
  width: 60em;
  height: 40em;
  margin: 0 auto;
  padding: 2em 5em;
  display: flex;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const LogoSection = styled.div`
  width: 35em;
  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin: 2em 0em 0em 0em;
    color: ${PrimaryColor};
  }
  p {
    font-size: 0.9rem;
    font-weight: 800;
    color: ${PrimaryColor};
  }
`;