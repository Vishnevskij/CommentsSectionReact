import React, { useMemo } from 'react'
import { useFetchData } from '../../hooks/useFetchData';
import { CommentInterface } from './types';
import { FlexColumn } from '../shared/Flex';
import { UserItem } from '../users/UserItem';
import { CommentItem } from './CommentItem';

export const CommentsList = () => {
    
    const options = useMemo(() => ({method: "GET"}), []);

    const { data, isLoading } = useFetchData<CommentInterface[]>(
        "https://jsonplaceholder.typicode.com/comments",
        options
    
      );

  return (
    <FlexColumn width='100%' justifyContent='center' alignItems='center'>
            <FlexColumn width='30%' alignItems='center' justifyContent='center'>
    <h1>Comments</h1>
{data?.map((comment)=>(<CommentItem comment={comment}/> ))}
            </FlexColumn>
  </FlexColumn>
  )
}
