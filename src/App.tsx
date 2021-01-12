import React from 'react';
import {Global} from '@emotion/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query-devtools';


// Hooks
import {StateProvider} from 'lib/hooks/useWeb3State';

// Components
// import Main from "./components/Main";

// Styles
import {mainStyles, mainFonts} from 'lib/styles';

// Configs
const isDevelopment = process.env.NODE_ENV === 'development';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <div className="App">
          <h1>Hello World!</h1>
          <h2>New project!</h2>
        </div>
        <Global styles={mainStyles} />
        <Global styles={mainFonts} />
        {isDevelopment && <ReactQueryDevtools />}
      </StateProvider>
    </QueryClientProvider>
  );
}

export default App;
