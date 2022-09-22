import GrayLine from '@/components/common/GreyLine';
import MoonLoading from '@/components/common/loading/MoonLoading';
import MypageLayout from '@/components/layouts/MypageLayout';
import { useProfileQuery } from '@/hooks/queries/useProfile';
import ProfileInfo from '@/components/mypage/ProfileInfo';
import { media } from '@/styles/mediaQuery';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FiRefreshCcw } from 'react-icons/fi';
import styled from 'styled-components';
import useInput from '@/hooks/useInput';
import Button from '@/components/common/button/Button';

const ProfileFallback = ({ error, resetErrorBoundary }) => (
  <RetryBox>
    <p>프로필을 불러오는데 실패했어요 😭😭😭 </p>
    <RetryButton onClick={() => resetErrorBoundary()} />
  </RetryBox>
);

const ProfileLoading = () => <MoonLoading />;

const Profile = ({ nickname }: { nickname: string }) => {
  const { data: profile } = useProfileQuery(nickname);

  const level = useInput(profile.level);
  const point = useInput(profile.point);
  const email = useInput(profile.email);
  const nickName = useInput(profile.nickname);
  const githubAccount = useInput(profile.githubAccount);
  const introduction = useInput(profile.introduction);
  const year = useInput(profile.year);
  const workPosition = useInput(profile.workPosition);
  const career = useInput(profile.career);
  const company = useInput(profile.company);

  return (
    <MypageLayout>
      <>
        <ProfileCotainer>
          <ProfileRow>
            <ProfileInfo label={'등급'} info={level} />
            <ProfileInfo label={'포인트'} info={point} />
          </ProfileRow>
          <ProfileRow>
            <ProfileInfo label={'이메일'} info={email} />
            <ProfileInfo label={'닉네임'} info={nickName} />
          </ProfileRow>
          <ProfileRow>
            <ProfileInfo label={'깃허브 계정'} info={githubAccount} />
            <ProfileInfo label={'자기소개'} info={introduction} />
          </ProfileRow>
          <ProfileRow>
            <ProfileInfo label={'경력'} info={year} />
            <ProfileInfo label={'직무'} info={workPosition} />
          </ProfileRow>
          <ProfileRow>
            <ProfileInfo label={'이력'} info={career} />
            <ProfileInfo label={'소속'} info={company} />
          </ProfileRow>
        </ProfileCotainer>
        <ButtonWrapper>
          <EditButton>{'수정하기'}</EditButton>
        </ButtonWrapper>
      </>
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
  padding: 5%;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  ${media.mobile} {
    padding: 5%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 10%;
`;

const EditButton = styled(Button)`
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 0.5em;
  cursor: pointer;
  width: 150px;
  border-radius: 0;
  margin: 2em 0;
`;

const ProfileRow = styled.div`
  display: flex;
  justify-content: space-between;
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
