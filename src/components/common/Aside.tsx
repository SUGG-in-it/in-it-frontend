import { loginState, userState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { successToast } from '@/utils/toast';
import Tags from '@/components/common/tags/Tags';
import { usePopularTagsQuery } from '@/hooks/queries/useTags';
import { Suspense } from 'react';
import RetryErrorBoundary from '@/components/common/errorrBoundary/RetryErrorBoundary';
import TagListSkeleton from '@/components/common/tagsWithDeleteButton/index.skeleton';

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
    router.push('/login');
  };

  return (
    <MypageWrapper>
      {isLogin ? (
        <>
          <Header>
            <NickName>{`안녕하세요! ${user.nickname} 님`}</NickName>
            <LogoutButton onClick={handleLogoutClick}>{'로그아웃'}</LogoutButton>
          </Header>
          <ProfileButton onClick={() => handleProfileClick(user.nickname)}>{'프로필 바로가기 >'}</ProfileButton>
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
  );
};

const TagList = () => {
  const { data: tags } = usePopularTagsQuery();

  return (
    <TagListWrapper>
      <p>인기 태그</p>
      <Tags tagList={tags.tags} />
    </TagListWrapper>
  );
};

const Aside = () => (
  <AsideContainer>
    <MyInfo />
    <RetryErrorBoundary>
      <Suspense fallback={<TagListSkeleton />}>
        <TagList />
      </Suspense>
    </RetryErrorBoundary>
  </AsideContainer>
);

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
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
  height: fit-content;
  margin-top: 5em;
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

export default Aside;
