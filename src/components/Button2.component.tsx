import { Group, Text } from '@mantine/core';
import React from 'react';
import { IconWorkFilled } from '../assets/icons/Fluent';

export interface IButton2 {
    icon?: string | JSX.Element;
    label: string;
}

const Button2: React.FC<IButton2> = ({ label, icon="" }) => {
    return (
        <Group className="cursor-pointer duration-200 ease-in-out transition-all border-2 border-transparent px-6 py-2 rounded-full bg-white/[0.1] hover:translate-x-[2px] hover:translate-y-[-2px] gap-2">
            {icon}
            <Text className="text-white font-quicksand text-xl tracking-4">
                {label}
            </Text>
        </Group>
    )
}
export default Button2;