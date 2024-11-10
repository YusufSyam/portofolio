import { Group, Text } from '@mantine/core';
import React from 'react';
import HeaderNavigationComp from './HeaderNavigation.component';

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({ }) => {
  return (
    <Group className='justify-between px-4 pt-6'>
      <Text className='font-alkatra-semibold text-white text-2xl'>
        Ucup's Portfolio
      </Text>
      <Group className='gap-12'>
        <HeaderNavigationComp label='Home' />
        <HeaderNavigationComp label='Portfolio' />
        <HeaderNavigationComp label='Contact' />
        <HeaderNavigationComp label='About' href={"/fd"} />
      </Group>
    </Group>
  )
}
export default HeaderLayout;