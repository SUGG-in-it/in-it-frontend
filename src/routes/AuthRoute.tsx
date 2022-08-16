import { Navigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loginState } from '@/store/users';
import { verifyToken } from '@/api/auth';

function Auth({ Component }) {
  const setIsLogin = useSetRecoilState(loginState);

  //TODO: auch 체크하는 부분 작성해야함
  const authCheck = () => {
    return true;
  };

  return authCheck() ? Component : <Navigate to="/" />;
}

export default Auth;
