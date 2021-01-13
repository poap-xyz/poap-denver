// @ts-nocheck
import { useQuery } from 'react-query';

// lib
import { api, endpoints } from 'lib/api';

// types
import { UserPoap, reactQueryParams } from 'lib/types';
type FetchPoapValues = {
  account: string;
};

export const usePoaps = ({ account }: FetchPoapValues) => {
  const fetchPoaps = (query: reactQueryParams): Promise<UserPoap[]> => {
    const { queryKey } = query;
    const _acc = queryKey[1];
    if (_acc && _acc !== '') return api().url(endpoints.poap.scan(_acc)).get().json();
    return [];
  };

  return useQuery(['poaps', account], fetchPoaps);
};
