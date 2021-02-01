import React, {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from '@emotion/styled';

// Hooks
import {useStateContext} from 'lib/hooks/useWeb3State';

// Constants
import {ROUTES, DENVER_EVENTS} from 'lib/helpers/constants';

// UI
import MainLayout from 'ui/layouts/MainLayout';
import PageTitle from './components/PageTitle';
import UserTokens from './components/UserTokens';

// Types
import {PoapEvent, UserPoap} from 'lib/types';

// Styled Components
const Wrapper = styled.div`
  padding: 100px 0 200px;
`;


const ScavengerHunt: FC = () => {
  const [denverEvents, setDenverEvents] = useState<PoapEvent[]>([]);
  const { push } = useHistory();
  const {isConnected, poaps, events} = useStateContext();

  useEffect(() => {
    if(!isConnected) push(ROUTES.home);
  }, [isConnected, push]);

  useEffect(() => {
    if (events) {
      let _events: PoapEvent[] = events as PoapEvent[];
      _events = _events.filter(each => DENVER_EVENTS.indexOf(each.id) > -1)
      setDenverEvents(_events.sort((a, b) => a.id - b.id))
    }
  }, [events]);

  return (
    <MainLayout>
      <Wrapper>
        <PageTitle />
        <UserTokens
          events={denverEvents}
          tokens={poaps as UserPoap[]}
        />
      </Wrapper>
    </MainLayout>
  )
};

export default ScavengerHunt;
