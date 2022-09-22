import { loginState, userState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { successToast } from '@/utils/toast';

const dummy = [
  'react',
  'javascript',
  'typescript',
  'node',
  'spring',
  'express',
  'java',
  'python',
  'ai',
  'front-end',
  'back-end',
];

const Aside = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const user = useRecoilValue(userState);

  const handleLogoutClick = () => {
    // 로그아웃이 너무 빠르게 되는거 같아 500ms 뒤에 로그아웃 처리하도록 했습니다.
    setTimeout(() => {
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
      setIsLogin(false);
      router.push('/login');
      successToast('로그아웃이 완료되었습니다.');
    }, 500);
  };

  const handleProfileClick = () => {
    router.push('/mypage/profile');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <AsideContainer>
      <MypageWrapper>
        {isLogin ? (
          <>
            <Header>
              <NickName>{`안녕하세요! ${user.nickname}`}</NickName>
              <LogoutButton onClick={handleLogoutClick}>{'로그아웃'}</LogoutButton>
            </Header>
            <ProfileButton onClick={handleProfileClick}>{'프로필 바로가기 >'}</ProfileButton>
          </>
        ) : (
          <>
            <Header>
              <NickName>{'안녕하세요! 로그인해주세요 😉'}</NickName>
            </Header>
            <LogoutButton onClick={handleLoginClick}>{'로그인'}</LogoutButton>
          </>
        )}
      </MypageWrapper>
      <TagListWrapper>
        <p>인기 태그</p>
        {dummy.map((tag, index) => (
          <TagWrapper key={index}>
            <span>{`# ${tag}`}</span>
          </TagWrapper>
        ))}
      </TagListWrapper>
    </AsideContainer>
  );
};

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LogoutButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 0.5em;
  cursor: pointer;
`;

const ProfileButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: ${({ theme }) => theme.grayColor};
  text-decoration: underline;
  padding: 0;
  cursor: pointer;
`;

const NickName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;

const MypageWrapper = styled.div`
  width: 250px;
  height: fit-content;
  margin-top: 5em;
  margin-left: 3vw;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  p {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.textColor};
  }
  ${media.tablet} {
    display: none;
  }
`;

const TagListWrapper = styled.ul`
  width: 250px;
  height: fit-content;
  margin-left: 3vw;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  margin-top: 1em;
  p {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.textColor};
  }
  ${media.tablet} {
    display: none;
  }
`;

const TagWrapper = styled.li`
  background-color: #eff3fa;
  color: #3e4042;
  padding: 0.3em;
  border-radius: 3px;
  width: fit-content;
  margin: 0em 1em 1em 0em;
  display: inline-block;
`;

export default Aside;
