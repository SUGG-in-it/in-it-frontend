import { loginState, userState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { successToast } from '@/utils/toast';
import WeeklyQuestion from '@/components/common/WeeklyQuestion';

const MyInfo = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [user, setUserState] = useRecoilState(userState);

  const handleLogoutClick = () => {
    localStorage.clear();
    setUserState({
      id: '',
      nickname: '',
    });
    setIsLogin(false);
    successToast('로그아웃이 완료되었습니다.');
  };

  const handleProfileClick = (nickname: string) => {
    router.push({ pathname: '/mypage/profile', query: { nickname: nickname } });
  };

  const handleLoginClick = () => {
    router.push('/signin');
  };

  return (
    <MypageWrapper>
      {isLogin ? (
          <MypageContainer>
            <NickName>{`안녕하세요! ${user.nickname} 님`}</NickName>
            <ProfileButton onClick={() => handleProfileClick(user.nickname)}>{'프로필 바로가기 >'}</ProfileButton>
            <LogoutButton onClick={handleLogoutClick}>{'로그아웃'}</LogoutButton>
          </MypageContainer>
      ) : (
          <MypageContainer>
            <NickName>{'안녕하세요! 로그인해주세요 😉'}</NickName>
            <LogoutButton onClick={handleLoginClick}>{'로그인'}</LogoutButton>
          </MypageContainer>
      )}
    </MypageWrapper>
  );
};

const RightAside = () => (
  <AsideContainer>
    <MyInfo />
    <WeeklyQuestion />
  </AsideContainer>
);

const AsideContainer = styled.aside`  
  width: 220px;
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
`;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoutButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 0.5em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2em;
  width: 100%;
  height: 40px;
`;

const ProfileButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: ${({ theme }) => theme.grayColor};
  text-decoration: underline;
  padding: 0;
  cursor: pointer;
  margin-bottom: 2em;
`;

const NickName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;

const MypageWrapper = styled.section`
  height: fit-content;
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


export default RightAside;
