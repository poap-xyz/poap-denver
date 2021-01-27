// @ts-nocheck
import { useQuery } from 'react-query';

// lib
import { api, endpoints } from 'lib/api';

// types
import { PoapEvent, reactQueryParams } from 'lib/types';

export const useEvents = () => {
  const fetchEvents = (query: reactQueryParams): Promise<PoapEvent[]> => {
    return api().url(endpoints.poap.events).get().json();
  };

  return useQuery(['events'], fetchEvents);
};
