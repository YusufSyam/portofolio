import { Group, Stack, Text, useMantineTheme } from '@mantine/core';
import React from 'react';
import HeaderNavigationComp from './HeaderNavigation.component';
import { IconLibraryBookFilled } from '../../assets/icons/Fluent';

export interface IHeaderLayout { }

const HeaderLayout: React.FC<IHeaderLayout> = ({ }) => {
  const theme= useMantineTheme();
  return (
    <Group className='px-[200px] pt-6 gap-12 justify-between'>
      <Group className='gap-3 flex-nowrap'>
        <IconLibraryBookFilled size={40} color={theme.colors['dark-grey'][5]} className='bg-white p-[6px] rounded-full' />
        <Stack className='gap-0'>
          <Text className='font-quicksand text-white text-md'>
            logbook of
          </Text>
          <Text className='font-quicksand-bold text-white text-4xl -mt-4 tracking-5'>
            yusuf
          </Text>
        </Stack>
      </Group>
      {/* <div className='h-10 w-[1px] bg-white'></div> */}

      <Group className='gap-12'>
        <HeaderNavigationComp label='about me' href={"/fd"} />
        <HeaderNavigationComp label='projects' />
        <HeaderNavigationComp label='contacts' />
      </Group>
    </Group>
  )
}
export default HeaderLayout;