import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const ProfileSkeleton = () => {
  const count = Array.from({ length: 4 }, (v, i) => i);
  return (
    <ProfileCotainer>
      <ProfileRow>
        <Skeleton height={50} style={{ marginBottom: '5px' }} />
      </ProfileRow>
      <ProfileRow>
        <Skeleton height={50} style={{ marginBottom: '5px' }} />
      </ProfileRow>
      {count.map((number) => (
        <ProfileRow key={number}>
          <ProfileInput>
            <Skeleton height={20} />
            <Skeleton height={50} style={{ marginBottom: '5px' }} />
          </ProfileInput>
          <ProfileInput>
            <Skeleton height={20} />
            <Skeleton height={50} style={{ marginBottom: '5px' }} />
          </ProfileInput>
        </ProfileRow>
      ))}
    </ProfileCotainer>
  );
};

const ProfileCotainer = styled.div`
  padding: 5%;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  width: 80%;
  margin: 0 auto;
`;

const ProfileRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  span {
    margin-top: 10px;
    width: 100%;
  }
`;

const ProfileInput = styled.div`
  width: 48%;
`;

export default ProfileSkeleton;
