import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '@/store/users';

function UnAuth({ Component }) {
  const isLogin = useRecoilValue(loginState);
  return isLogin ? Component : <Navigate to="/" />;
}

export default UnAuth;
