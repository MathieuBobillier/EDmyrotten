'use client';

import { useState, useEffect } from 'react';
import { authenticate } from '../app/Autantification/Index';
import { ApprovedPage } from './AuthInfo';
import { getSessionId, getAccountDetails } from '../app/Autantification/Index';

const LoginPage = (): JSX.Element => {
  const [redirectUrl, setRedirectUrl] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountDetails, setAccountDetails] = useState<any>(null);
  const [requestToken, setRequestToken] = useState('');

  const handleAuthentication = async (): Promise<void> => {
    const url = await authenticate();
    setRedirectUrl(url);
  };

  const handleLogout = (): void => {
    setIsLoggedIn(false);
    setAccountDetails(null);
  };

  const handleSession = async (requestToken: string): Promise<void> => {
    const sessionId = await getSessionId(requestToken);
    const details = await getAccountDetails(sessionId);
    setAccountDetails(details);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (window.location.search.includes('request_token')) {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('request_token');
      setRequestToken(token as string);
    }
  }, []);

  useEffect(() => {
    if (requestToken) {
      handleSession(requestToken);
    }
  }, [requestToken]);

  if (redirectUrl) {
    window.location.href = redirectUrl;
    return (
      <div>
        <p>Redirecting to TMDb for authentication...</p>
      </div>
    );
  }

  if (accountDetails) {
    return (
      <div>
        <button onClick={handleLogout}>Bonjour, {accountDetails.username}</button>
        <ApprovedPage requestToken={requestToken} />
      </div>
    );
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Bonjour</button>
      ) : (
        <button onClick={handleAuthentication}>Login with TMDb</button>
      )}
    </div>
  );
};

export default LoginPage;