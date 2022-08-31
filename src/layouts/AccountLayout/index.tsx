import styled from 'styled-components';
import appLogo from '@/assets/images/bigLogo.png';
import { Outlet } from 'react-router-dom';

/* -------------------------------------------------------------------------------------------------
 * AccountLayout -> 계정관련 레아아웃 (sign up 화면, login 화면, 비밀번호 찾기 화면)
 * -----------------------------------------------------------------------------------------------*/

const AccountLayout = () => {
  return (
    <Wrapper>
      <img src={appLogo} />
      <Outlet />
    </Wrapper>
  );
};

export default AccountLayout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    margin-bottom: 2em;
  }
`;
