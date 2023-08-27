import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { PostInterface } from './types';
import { FlexColumn } from '../shared/Flex';
import { PostItem } from './PostItem';
import { useMemo } from 'react';


export const PostList = () => {

  const options = useMemo(() => ({method: "GET"}), []);

    const { data, isLoading } = useFetchData<PostInterface[]>(
        "https://jsonplaceholder.typicode.com/posts",
        options
          );
  return (
    <FlexColumn width='100%' justifyContent='center' alignItems='center'>
    <FlexColumn width='70%' alignItems='center'>
      <h1>Posts</h1>
    {data?.map((post)=>(<PostItem post={post}/> ))}
      </FlexColumn>
      </FlexColumn>
  )
}
