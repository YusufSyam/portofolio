import { Group, Text } from '@mantine/core';
import React from 'react';

export interface IInfoWithNumber {
    number: string | JSX.Element | number;
    info: string;
}

const InfoWithNumber: React.FC<IInfoWithNumber> = ({ info, number }) => {
    return (
        <Group className="gap-1 w-40 flex-nowrap">
            {/* <Text className="relative text-white font-quicksand-semibold text-5xl bg-white/[0.1] !min-w-20 !min-h-20 rounded-full text-center pt-2">
                {number}
                <Text className='absolute text-2xl top-0 right-4'>
                    +
                </Text>
            </Text> */}
           <div className='bg-white/[0.1] min-w-[70px] !md:min-w-20 min-h-[72px] !md:min-h-20 rounded-full text-white pt-2 relative'>
                <Text className="font-quicksand-semibold text-4xl md:text-5xl w-fit mx-auto">
                    {number}
                </Text>
                <Text className='absolute text-2xl top-1 md:top-2 right-2 font-poppins'>
                    +
                </Text>
            </div> 
            <Text className="text-white self-center font-quicksand-semibold text-md">
                {info}
            </Text>
        </Group>
    )
}
export default InfoWithNumber;