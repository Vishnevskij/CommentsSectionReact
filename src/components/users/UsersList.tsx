import React from 'react'

import { useFetchData } from '../../hooks/useFetchData'
import { DashboardUserInterface } from './types';
import { FlexColumn } from '../shared/Flex';
import { UserItem } from './UserItem';
import { useMemo } from 'react';

export const UsersList = () => {

  const options = useMemo(() => ({method: "GET"}), []);

    const { data, isLoading } = useFetchData<DashboardUserInterface[]>(
        "https://jsonplaceholder.typicode.com/users",
        options
    
      );
  return (<FlexColumn width='100%' justifyContent='center' alignItems='center'>
  <FlexColumn width='30%' alignItems='center' justifyContent='center'>
    <h1>Users</h1>
{data?.map((user)=>(<UserItem user={user}/> ))}
  </FlexColumn>
  </FlexColumn>
  )
}
