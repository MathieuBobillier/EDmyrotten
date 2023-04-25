import { useEffect } from 'react';
import { getSessionId, getAccountDetails } from '../app/Autantification/Index';

type ApprovedPageProps = {
  requestToken: string;
};

export const ApprovedPage = ({ requestToken }: ApprovedPageProps): JSX.Element => {
  useEffect(() => {
    const handleSession = async (): Promise<void> => {
      const sessionId = await getSessionId(requestToken);
      const accountDetails = await getAccountDetails(sessionId);
      console.log(accountDetails);
    };
    handleSession();
  }, [requestToken]);

  return (
    <div>
      <p>Fetching account details...</p>
    </div>
  );
};