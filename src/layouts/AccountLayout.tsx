import styled from 'styled-components';
import appLogo from '@/assets/images/bigLogo.png';
import Image from 'next/image';
import { ReactElement } from 'react';

/* -------------------------------------------------------------------------------------------------
 * AccountLayout -> 계정관련 레아아웃 (sign up 화면, login 화면, 비밀번호 찾기 화면)
 * -----------------------------------------------------------------------------------------------*/

interface AccountLayoutProps {
  children: ReactElement;
}

const AccountLayout = ({ children }: AccountLayoutProps) => {
  return (
    <Wrapper>
      <Image src={appLogo} width={200} height={100} alt="앱 로고"/>
      {children}
    </Wrapper>
  );
};

export default AccountLayout;

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
