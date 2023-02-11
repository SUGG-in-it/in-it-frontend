import APIButton from '@/components/common/button/APIButton';
import { VALIDATION_ERROR_MSG } from '@/constants/validation';
import { useJoinMutation, useNicknameCheckMutation } from '@/hooks/queries/useUser';
import { signUpState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const RegisterSecondStep = () => {
  const router = useRouter();
  const [signUp, setSignUp] = useRecoilState(signUpState);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      year: '신입',
      workPosition: '',
    },
  });

  const mutationJoin = useJoinMutation({
    onSuccess: () => {
      router.push('/signin');
      setSignUp({
        step: 1,
        email: '',
      });
    },
  });

  const mutationCheckNickname = useNicknameCheckMutation({
    onSuccess: () => {
      const data = getValues();
      mutationJoin.mutate({
        email: signUp.email,
        password: data.password,
        nickname: data.nickname,
        year: data.year || '신입',
        workPosition: data.workPosition,
      });
    },
  });

  return (
    <SignUpWrapper>
      <SingUpForm>
        <input
          {...register('nickname', {
            required: VALIDATION_ERROR_MSG.EMPTY_NICKNAME,
            pattern: {
              value: /^[a-z0-9_-]{2,10}$/,
              message: VALIDATION_ERROR_MSG.INVALID_NICKNAME,
            },
          })}
          title={'nickname'}
          placeholder={'닉네임'}
        />
        <p>{errors.nickname?.message}</p>
        <input
          {...register('password', {
            required: VALIDATION_ERROR_MSG.EMPTY_PASSWORD,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: VALIDATION_ERROR_MSG.INVALID_PASSWORD,
            },
          })}
          title={'password'}
          type="password"
          placeholder={'비밀번호'}
        />
        <p>{errors.password?.message}</p>
        <input
          {...register('confirmPassword', {
            required: VALIDATION_ERROR_MSG.EMPTY_CONFIRM_PASSWORD,
            validate: (value) => value === getValues().password || VALIDATION_ERROR_MSG.INCONSISTENCY_PASSWORD,
          })}
          title={'password confirm'}
          type="password"
          placeholder={'비밀번호 확인'}
        />
        <p>{errors.confirmPassword?.message}</p>
        <select {...register('year')}>
          <option disabled>경력을 선택해주세요.</option>
          <option value="신입" selected>
            신입
          </option>
          <option value="1년차">1년차</option>
          <option value="2년차">2년차</option>
          <option value="3년차">3년차</option>
          <option value="4년차">4년차</option>
          <option value="5년차 이상">5년차 이상</option>
          <option value="10년차 이상">10년차 이상</option>
          <option value="20년차 이상">20년차 이상</option>
        </select>
        <p>{errors.year?.message}</p>
        <input
          {...register('workPosition', {
            required: VALIDATION_ERROR_MSG.EMPTY_WORK_POSITION,
          })}
          title={'work position'}
          placeholder={'직무'}
        />
        <p>{errors.workPosition?.message}</p>
        <SignUpButton
          onClick={handleSubmit((data) => {
            mutationCheckNickname.mutate(data.nickname);
          })}
          isLoading={mutationCheckNickname.isLoading}
        >
          {'회원가입'}
        </SignUpButton>
      </SingUpForm>
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  ${media.mobile} {
    width: 300px;
    margin: 0 auto;
  }
`;

const SingUpForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    font-size: 1rem;
    padding: 0.5em;
    border: none;
    border-radius: 0.3em;
    width: calc(100% - 1em);
    height: 30px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.backgrondLightColor};
    color: ${({ theme }) => theme.textColor};
    ::placeholder {
      color: darkgray;
      font-size: 0.8rem;
    }
    :focus {
      outline: none;
    }
  }
  select {
    height: 45px;
    border: none;
    margin-top: 20px;
  }
  p {
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
    margin-left: 5px;
  }
`;

const SignUpButton = styled(APIButton)`
  margin-bottom: 2em;
  border: none;
  height: 50px;
  border-radius: 3px;
  margin-top: 20px;
`;

export default RegisterSecondStep;
