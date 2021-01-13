import React from 'react';
import ReactDOM from 'react-dom';
import {Global} from '@emotion/react';
import {QueryClient, QueryClientProvider} from 'react-query';

// Routes
import Routes from 'lib/routes';

// Hooks
import {StateProvider} from 'lib/hooks/useWeb3State';

// Styles
import {mainStyles, mainFonts} from 'lib/styles';

// Configs
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <StateProvider>
      <Routes />
      <Global styles={mainStyles}/>
      <Global styles={mainFonts}/>
    </StateProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);
