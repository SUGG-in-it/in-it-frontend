import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('@/pages/SignUp'));
const LoginPage = lazy(() => import('@/pages/Login'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPassword'));
const MyPage = lazy(() => import('@/pages/MyPage'));

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/my-page" element={<MyPage />} />
    </Routes>
  );
};

export default AppRoute;
