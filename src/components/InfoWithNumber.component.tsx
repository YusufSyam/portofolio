import { Group, Text } from '@mantine/core';
import React from 'react';

export interface IInfoWithNumber {
    number: string | JSX.Element;
    info: string;
}

const InfoWithNumber: React.FC<IInfoWithNumber> = ({ info, number }) => {
    return (
        <Group className="gap-1 w-36 flex-nowrap">
            <Text className="text-white font-poppins text-6xl">
                {number}
            </Text>
            <Text className="text-white self-center font-quicksand-semibold text-md">
                {info}
            </Text>
        </Group>
    )
}
export default InfoWithNumber;