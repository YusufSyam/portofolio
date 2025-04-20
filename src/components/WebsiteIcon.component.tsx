import { Group, Stack, useMantineTheme, Text } from '@mantine/core';
import React from 'react';
import { IconLibraryBookFilled } from '../assets/icons/Fluent';

export interface IWebsiteIcon { }

const WebsiteIcon: React.FC<IWebsiteIcon> = ({ }) => {
    const theme= useMantineTheme();
    return (
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
    )
}
export default WebsiteIcon;