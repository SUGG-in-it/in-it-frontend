import GrayLine from '@/components/common/GreyLine';
import MoonLoading from '@/components/common/loading/MoonLoading';
import MypageLayout from '@/components/layouts/MypageLayout';
import { useProfileQuery } from '@/hooks/queries/useProfile';
import ProfileRow from '@/pages/mypage/profile/ProfileRow';
import { userState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FiRefreshCcw } from 'react-icons/fi';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const ProfileFallback = ({ error, resetErrorBoundary }) => (
  <RetryBox>
    <p>프로필을 불러오는데 실패했어요 😭😭😭 </p>
    <RetryButton onClick={() => resetErrorBoundary()} />
  </RetryBox>
);

const ProfileLoading = () => <MoonLoading />;

const Profile = ({ nickname }: { nickname: string }) => {
  const { data: profile } = useProfileQuery(nickname);

  return (
    <MypageLayout>
      <ProfileCotainer>
        <ProfileRow label={'등급'} info={profile.level} />
        <ProfileRow label={'포인트'} info={profile.point} />
        <ProfileRow label={'이메일'} info={profile.email} />
        <ProfileRow label={'닉네임'} info={profile.nickname} />
        <ProfileRow label={'깃허브 계정'} info={profile.githubAccount} />
        <ProfileRow label={'자기소개'} info={profile.introduction} />
        <GrayLine />
        <ProfileRow label={'경력'} info={profile.year} />
        <ProfileRow label={'직무'} info={profile.workPosition} />
        <ProfileRow label={'이력'} info={profile.career} />
        <ProfileRow label={'소속'} info={profile.company} />
      </ProfileCotainer>
    </MypageLayout>
  );
};

const ProfileSection = ({ nickname }: { nickname: string }) => (
  <ErrorBoundary FallbackComponent={ProfileFallback}>
    <Suspense fallback={<ProfileLoading />}>
      <Profile nickname={nickname} />
    </Suspense>
  </ErrorBoundary>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { nickname } = query;

  return {
    props: {
      nickname,
    },
  };
};

const ProfileCotainer = styled.div`
  padding: 5% 10%;
  ${media.mobile} {
    padding: 5%;
  }
`;

const RetryBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 3em;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

const RetryButton = styled(FiRefreshCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

export default ProfileSection;
