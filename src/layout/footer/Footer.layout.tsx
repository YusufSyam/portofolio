import { Group, Stack, Text } from '@mantine/core';
import React from 'react';
import WebsiteIcon from '../../components/WebsiteIcon.component';
import Contacts from '../../components/Contacts.component';
import { IconGmailFilled, IconInstagramFilled, IconLinkedinFilled } from '../../assets/icons/Fluent';

export interface IFooterLayout { }

const FooterLayout: React.FC<IFooterLayout> = ({ }) => {
    return (
        <Stack className='bg-dark-grey pt-12 pb-4 px-24 gap-6'>
            <Group className='gap-0 justify-between'>
                <Group className='self-start '>
                    <WebsiteIcon />
                    <div className='w-20 h-[1px] bg-white'></div>
                    <Text className='text-white font-quicksand'>
                        The Portfolio of Yusuf Syam
                    </Text>
                </Group>
                <Group className='gap-4 mt-2'>
                    <Stack className='gap-2 self-start'>
                        <Text className="font-quicksand-semibold text-lg text-white self-start">
                            contacts :
                        </Text>
                        <Text className="font-quicksand-semibold text-lg text-white self-start">
                            other links :
                        </Text>
                    </Stack>
                    <Stack className='h-full self-start gap-2'>
                        <Group className=" gap-4 self-start">
                            <IconGmailFilled color="white" size={20} className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] " />
                            <IconLinkedinFilled color="white" size={20} className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] " />
                            <IconInstagramFilled color="white" size={22} className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] " />
                        </Group>
                        <Group className='mt-1'>
                            <Text className="font-quicksand-semibold text-lg text-light-grey self-start cursor-pointer hover:text-grey duration-200 ease-linear transition-all">
                                Github
                            </Text>
                            <Text className="font-quicksand-semibold text-lg text-white ">
                                .
                            </Text>
                            <Text className="font-quicksand-semibold text-lg text-light-grey self-start cursor-pointer hover:text-grey duration-200 ease-linear transition-all">
                                Stack Overflow
                            </Text>
                            <Text className="font-quicksand-semibold text-lg text-white ">
                                .
                            </Text>
                            <Text className="font-quicksand-semibold text-lg text-light-grey self-start cursor-pointer hover:text-grey duration-200 ease-linear transition-all">
                                Kaggle
                            </Text>
                        </Group>
                    </Stack>
                </Group>
            </Group>
            <Text className='border-t border-white text-center pt-4 text-white'>
                &copy; 2025 Muh Yusuf Syam. All rights reserved
            </Text>
        </Stack>
    )
}
export default FooterLayout;