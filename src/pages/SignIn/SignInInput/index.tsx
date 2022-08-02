import { PointColor } from '@/assets/colors';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignInInputSection = () => {
  const navigate = useNavigate();
  const moveToSignUp = () => {
    navigate('/sign-up');
  };

  const moveToForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <InputSection>
      <Input label="이메일" type="email" placeholder="이메일을 입력해주세요."></Input>
      <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요."></Input>
      <Button color={PointColor} margin={'3em 0em 1em'}>
        {'로그인'}
      </Button>
      <SignUpContainer>
        <u onClick={moveToForgotPassword}>비밀번호 찾기</u>
        <u onClick={moveToSignUp}>회원가입</u>
      </SignUpContainer>
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

const SignUpContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  u {
    color: white;
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default SignInInputSection;
