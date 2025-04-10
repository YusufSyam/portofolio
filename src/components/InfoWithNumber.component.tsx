import { Group, Text } from '@mantine/core';
import React from 'react';

export interface IInfoWithNumber {
    number: string | JSX.Element;
    info: string;
}

const InfoWithNumber: React.FC<IInfoWithNumber> = ({ info, number }) => {
    return (
        <Group className="gap-1 w-40 flex-nowrap">
            <Text className="text-white font-quicksand-semibold text-6xl bg-white/[0.1] !min-w-24 !min-h-24 rounded-full text-center pt-2">
                {number}
            </Text>
            <Text className="text-white self-center font-quicksand-semibold text-md">
                {info}
            </Text>
        </Group>
    )
}
export default InfoWithNumber;