import React from 'react';
import ReactDOM from 'react-dom';
import {Global} from '@emotion/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query-devtools';

// Routes
import Routes from 'lib/routes';

// Hooks
import {StateProvider} from 'lib/hooks/useWeb3State';

// Styles
import {mainStyles, mainFonts} from 'lib/styles';

// Configs
const isDevelopment = process.env.NODE_ENV === 'development';
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <StateProvider>
      <Routes />
      <Global styles={mainStyles}/>
      <Global styles={mainFonts}/>
      {isDevelopment && <ReactQueryDevtools/>}
    </StateProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
