import LoginRequestDialog from '@/components/common/Dialog/LoginRequestDialog';

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        return <LoginRequestDialog />;
      }
      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export default withAuth;
