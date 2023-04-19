'use client'
;import { useEffect } from 'react';
import { authenticate, getSessionId, getAccountDetails } from '../app/Autantification/Index';

const LoginPage = (): JSX.Element => {
  useEffect(() => {
    const handleAuthentication = async (): Promise<void> => {
      const redirectUrl = await authenticate();
      window.location.href = redirectUrl;
    };
    handleAuthentication();
  }, []);

  return (
    <div>
      <p>Redirecting to TMDb for authentication...</p>
    </div>
  );
};

export default LoginPage;
