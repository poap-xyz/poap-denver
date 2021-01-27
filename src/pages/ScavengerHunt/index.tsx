import React, {FC, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from '@emotion/styled';

// Hooks
import {useStateContext} from 'lib/hooks/useWeb3State';

// Constants
import {ROUTES} from 'lib/helpers/constants';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import PageTitle from './components/PageTitle';
import UserTokens from './components/UserTokens';

// Types
import {UserPoap} from 'lib/types';

// Styled Components
const Wrapper = styled.div`
  padding: 100px 0 200px;
`;


const ScavengerHunt: FC = () => {
  const { push } = useHistory();
  const {isConnected, poaps} = useStateContext();

  useEffect(() => {
    if(!isConnected) push(ROUTES.home);
  }, [isConnected, push]);

  return (
    <MainLayout>
      <Wrapper>
        <PageTitle />
        <UserTokens tokens={poaps as UserPoap[]} />
      </Wrapper>
    </MainLayout>
  )
};

export default ScavengerHunt;
