import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '@/store/users';

function Auth({ Component }) {
  const isLogin = useRecoilValue(loginState);
  return isLogin ? Component : <Navigate to="/login" replace />;
}

export default Auth;
