import MypageLayout from '@/components/layouts/MypageLayout';
import { useProfileMutation, useProfileQuery } from '@/hooks/queries/useProfile';
import ProfileInput from '@/components/mypage/profile/ProfileInput';
import { media } from '@/styles/mediaQuery';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';
import styled from 'styled-components';
import useInput from '@/hooks/useInput';
import RetryErrorBoundary from '@/components/common/errorrBoundary/RetryErrorBoundary';
import ProfileSkeleton from '@/components/mypage/profile/ProfileSection/index.skeleton';
import APIButton from '@/components/common/button/APIButton';
import withAuth from '@/components/hoc/withAuth';
import withHead from '@/components/hoc/withHead';

const Profile = ({ nickname }: { nickname: string }) => {
  const { data: profile } = useProfileQuery(nickname);
  const mutationProfile = useProfileMutation({});

  const email = useInput(profile.email);
  const nickName = useInput(profile.nickname);
  const githubAccount = useInput(profile.githubAccount);
  const introduction = useInput(profile.introduction);
  const year = useInput(profile.year);
  const workPosition = useInput(profile.workPosition);
  const career = useInput(profile.career);
  const company = useInput(profile.company);

  const handleEditProfile = () => {
    mutationProfile.mutate({
      level: profile.level,
      point: profile.point,
      email: email.value,
      nickname: nickName.value,
      githubAccount: githubAccount.value,
      introduction: introduction.value,
      year: year.value,
      workPosition: workPosition.value,
      career: career.value,
      company: company.value,
    });
  };

  return (
    <>
      <ProfileCotainer>
        <ProfileRow>
          <Label>{'포인트'}</Label>
          <ProfileInfo>{profile.level}</ProfileInfo>
        </ProfileRow>
        <ProfileRow>
          <Label>{'등급'}</Label>
          <ProfileInfo>{profile.point}</ProfileInfo>
        </ProfileRow>
        <ProfileRow>
          <ProfileInput label={'이메일'} info={email} />
          <ProfileInput label={'닉네임'} info={nickName} />
        </ProfileRow>
        <ProfileRow>
          <ProfileInput label={'깃허브 계정'} info={githubAccount} />
          <ProfileInput label={'자기소개'} info={introduction} />
        </ProfileRow>
        <ProfileRow>
          <ProfileInput label={'경력'} info={year} />
          <ProfileInput label={'직무'} info={workPosition} />
        </ProfileRow>
        <ProfileRow>
          <ProfileInput label={'이력'} info={career} />
          <ProfileInput label={'소속'} info={company} />
        </ProfileRow>
      </ProfileCotainer>
      <ButtonWrapper>
        <EditButton onClick={handleEditProfile} isLoading={mutationProfile.isLoading}>
          {'수정하기'}
        </EditButton>
      </ButtonWrapper>
    </>
  );
};

const ProfileSection = ({ nickname }: { nickname: string }) => (
  <MypageLayout>
    <RetryErrorBoundary>
      <Suspense fallback={<ProfileSkeleton />}>
        <Profile nickname={nickname} />
      </Suspense>
    </RetryErrorBoundary>
  </MypageLayout>
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

const Label = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.pointColor};
  margin-bottom: 0.5em;
  font-weight: 800;
`;

const ProfileInfo = styled.p``;

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

const EditButton = styled(APIButton)`
  border: none;
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
  min-height: 4em;
  ${media.mobile} {
    flex-direction: column;
  }
`;

export default withHead(withAuth(ProfileSection),'init : 나의 프로필','');
