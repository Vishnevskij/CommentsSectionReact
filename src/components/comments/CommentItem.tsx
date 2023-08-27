import React, { FC } from 'react';
import { CommentInterface } from "./types";
import { ContentWrapper } from '../shared/Common';
import { FlexColumn } from '../shared/Flex';

interface PropsInterface {
    comment: CommentInterface
}

export const CommentItem: FC<PropsInterface>= ({comment}) => {
    const { postId, id, name, email, body } = comment;
    
  return (
        <ContentWrapper alignItems="center" width="100%">
              
               <FlexColumn width='100%' alignItems='center' justifyContent='center' margin='5px' padding='25px' fontSize='20px'>
               <h3>{name}</h3>
               <p>{email}</p>
               <span>{body}</span>
               </FlexColumn>

        </ContentWrapper>
  )
}
