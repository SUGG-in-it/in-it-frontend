import GrayLine from '@/components/GrayLine';
import ProfileRow from '@/pages/MyPage/Section/ProfileSection/ProfileRow';
import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const dummy = {
  email: 'wldid060960@gmail.com',
  nickname: '지렁이',
  githubAccount: '99-zziy',
  introduction: '안녕하세요. 저는 강지영입니다.',
  year: '3년차',
  workPosition: '프론트엔드',
  career: '',
  company: '카카오 엔터프라이즈',
  power: '1000',
  rank: '새싹',
};

const ProfileSection = () => {
  const { email, nickname, githubAccount, introduction, year, workPosition, career, company, power, rank } = dummy;

  return (
    <ProfileCotainer>
      <ProfileRow label={'등급'} info={rank} />
      <ProfileRow label={'파워'} info={power} />
      <ProfileRow label={'이메일'} info={email} />
      <ProfileRow label={'닉네임'} info={nickname} />
      <ProfileRow label={'깃허브 계정'} info={githubAccount} />
      <ProfileRow label={'자기소개'} info={introduction} />
      <GrayLine />
      <ProfileRow label={'경력'} info={year} />
      <ProfileRow label={'직무'} info={workPosition} />
      <ProfileRow label={'이력'} info={career} />
      <ProfileRow label={'소속'} info={company} />
    </ProfileCotainer>
  );
};

const ProfileCotainer = styled.div`
  padding: 5% 10%;
  ${media.mobile} {
    padding: 5%;
  }
`;

export default ProfileSection;
