import { Group, Text } from '@mantine/core';
import React from 'react';

export interface IButton2 {
    icon?: string | JSX.Element;
    label: string;
    bgColor?: "dark" | "transparent" | "cream" | "grey";
}

const Button2: React.FC<IButton2> = ({ label, icon = "", bgColor }) => {
    if (bgColor == 'transparent') {
        return (
            <Group className={`cursor-pointer duration-200 ease-in-out transition-all border-2 border-transparent pl-[10px] pr-[14px] py-1 rounded-full hover:translate-x-[2px] hover:translate-y-[-2px] gap-[6px] w-fit bg-white/[0.1]`}>
                {icon}
                <Text className="text-white font-quicksand text-lg tracking-4">
                    {label}
                </Text>
            </Group>
        )
    } else if (bgColor == 'cream') {
        return (
            <Group className={`cursor-pointer duration-200 ease-in-out transition-all border-2 border-transparent pl-[10px] pr-[14px] py-1 rounded-full hover:translate-x-[2px] hover:translate-y-[-2px] gap-[6px] w-fit bg-cream`}>
                {icon}
                <Text className="text-primary-text-1 font-quicksand text-lg tracking-4">
                    {label}
                </Text>
            </Group>
        )
    } else if (bgColor == 'dark') {
        return (
            <Group className={`cursor-pointer duration-200 ease-in-out transition-all border-2 border-transparent pl-[10px] pr-[14px] py-1 rounded-full hover:translate-x-[2px] hover:translate-y-[-2px] gap-[6px] w-fit bg-dark-grey`}>
                {icon}
                <Text className="text-white font-quicksand text-lg tracking-4">
                    {label}
                </Text>
            </Group>
        )
    } else {
        return (
            <Group className={`cursor-pointer duration-200 ease-in-out transition-all border-2 border-transparent pl-[10px] pr-[14px] py-1 rounded-full hover:translate-x-[2px] hover:translate-y-[-2px] gap-[6px] w-fit bg-grey`}>
                {icon}
                <Text className="text-white font-quicksand text-lg tracking-4">
                    {label}
                </Text>
            </Group>
        )
    }
}
export default Button2;