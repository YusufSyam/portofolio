import { Group, Text } from '@mantine/core';
import React from 'react';
import HeaderNavigationComp from './HeaderNavigation.component';

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({ }) => {
  return (
    <Group className='justify-between '>
      <Text>
        Yusuf Syam
      </Text>
      <Group>
        <HeaderNavigationComp label='Home' />
        <HeaderNavigationComp label='Home' />
        <HeaderNavigationComp label='Home' />
        <HeaderNavigationComp label='Home' />
      </Group>
    </Group>
  )
}
export default HeaderLayout;