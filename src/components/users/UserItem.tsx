import React, { FC } from 'react'
import { DashboardUserInterface } from './types'
import { FlexColumn, FlexRow } from '../shared/Flex'
import { ContentWrapper } from '../shared/Common'

interface PropsInterface {
    user: DashboardUserInterface
}
export const UserItem: FC<PropsInterface> = ({user}) => {
    const {name, email, phone} = user;

return (
    <ContentWrapper alignItems="center" width="100%">
        
        <FlexColumn width='100%' alignItems='center' justifyContent='center' margin='5px' fontSize='25px'>
        
        <h3>{name}</h3>
        <p>{email}</p>
        <span>{phone}</span>
        </FlexColumn>
        
    </ContentWrapper>
  )
}
