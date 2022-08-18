import GrayLine from '@/components/GrayLine';
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
      <ProfileRow>
        <Label>{'파워'}</Label>
        <Info>{power}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'등급'}</Label>
        <Info>{rank}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'이메일'}</Label>
        <Info>{email}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'닉네임'}</Label>
        <Info>{nickname}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'깃허브 계정'}</Label>
        <Info>{githubAccount}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'자기소개'}</Label>
        <Introduction cols="30" rows="5" readonly>
          {introduction}
        </Introduction>
      </ProfileRow>
      <GrayLine />
      <ProfileRow>
        <Label>{'경력'}</Label>
        <Info>{year}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'직무'}</Label>
        <Info>{workPosition}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'이력'}</Label>
        <Info>{career}</Info>
      </ProfileRow>
      <ProfileRow>
        <Label>{'소속'}</Label>
        <Info>{company}</Info>
      </ProfileRow>
    </ProfileCotainer>
  );
};

const ProfileCotainer = styled.div`
  padding: 5% 10%;
`;

const ProfileRow = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const PowerRankRow = styled(ProfileRow)`
  width: 60%;
`;

const Label = styled.p`
  font-size: 1rem;
  width: 30%;
  color: #595959;
`;

const Info = styled.p`
  font-size: 1rem;
  width: 70%;
`;

const Introduction = styled.textarea`
  border: 1px solid #595959;
  resize: none;
  border-radius: 3px;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

export default ProfileSection;
