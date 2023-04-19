import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSessionId, getAccountDetails } from '../app/Autantification/Index';

const ApprovedPage = (): JSX.Element => {
  const router = useRouter();
  const { request_token } = router.query;

  useEffect(() => {
    const handleSession = async (): Promise<void> => {
      const sessionId = await getSessionId(request_token as string);
      const accountDetails = await getAccountDetails(sessionId);
      console.log(accountDetails);
    };
    handleSession();
  }, [request_token]);

  return (
    <div>
      <p>Fetching account details...</p>
    </div>
  );
};

export default ApprovedPage
