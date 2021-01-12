import wretch, { WretcherError } from 'wretch';

// Endpoints
export const endpoints = {
  poap: {
    events: `${process.env.REACT_APP_POAP_API}/events`,
    scan: (address: string) => `${process.env.REACT_APP_POAP_API}/actions/scan/${address}`,
  },
};

// Handlers
const handleHttpError = (errorCode: number) => (error: WretcherError) => {
  console.error(`Fetch error on ${errorCode} code parsing`, error);
  // const toast = useToast();
  // toast({
  //   title: 'Fetch error',
  //   description: 'An error occurred while fetching data',
  //   status: 'error',
  // });
};

const handleGenericError = () => (error: WretcherError) => {
  console.error(`Fetch error`, error);
  // const toast = useToast();
  // toast({
  //   title: 'Fetch error',
  //   description: 'Endpoint not found',
  //   status: 'error',
  // });
};

// Custom fetch
export const api = () => {
  return wretch()
    .catcher(404, handleGenericError())
    .catcher(405, handleHttpError(405))
    .catcher(400, handleHttpError(400));
};
