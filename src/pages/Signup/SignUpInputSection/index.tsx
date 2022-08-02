import { PointColor } from '@/assets/colors';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUpInputSection = () => {
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('/sign-in');
  };

  return (
    <InputSection>
      <Input label="이메일" type="email" placeholder="이메일을 입력해주세요." />
      <Input label="닉네임" type="text" placeholder="닉네임을 입력해주세요." />
      <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
      <Input label="비밀번호 확인" type="password" placeholder="비밀번호 확인을 입력해주세요." />
      <Button color={PointColor} margin={'3em 0em 1em'}>
        {'회원가입'}
      </Button>
      <LoginContainer>
        <span>이미 계정이 있습니까?</span>
        <u onClick={moveToLogin}>로그인하기</u>
      </LoginContainer>
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: #f5f5f5;
    font-size: 0.8rem;
  }
`;

const LoginContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  span {
    color: white;
    font-size: 0.9rem;
  }
  u {
    color: white;
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default SignUpInputSection;
