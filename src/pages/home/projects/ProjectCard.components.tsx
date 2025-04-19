import { Grid, Group, Stack, Text } from '@mantine/core';
import dummyImage from '../../../../src/assets/images/camera.jpg'
import React from 'react';
import { techStackChip } from '../../../components/TechStackChipIcon.component';

export interface IProjectCard { }

const ProjectCard: React.FC<IProjectCard> = ({ }) => {
    return (

        <Stack className='bg-white/[0.15] backdrop-blur-md rounded-2xl p-2'>
            <div className="w-full rounded-xl overflow-hidden z-10">
                <img
                    src={dummyImage}
                    alt="Gambar Item"
                    className="w-full h-48 object-cover"
                />
            </div>
            <Stack className='mx-2 pb-2'>
                <Stack className=' gap-1'>
                    <Text className='font-quicksand-semibold text-white'>
                        Bachelor Project: Implementation of Odd-Even System
                    </Text><Text className='font-light text-[14px] text-white'>
                        a machine learning project
                    </Text>
                </Stack>
                <Stack className='gap-1'>
                    <Text className='font-semibold text-white'>
                        Techs
                    </Text>

                    <Group className='gap-2'>
                        <div>{techStackChip["cpp"]}</div>
                        <div>{techStackChip["git"]}</div>
                        <div>{techStackChip["java"]}</div>
                        <div>{techStackChip["javascript"]}</div>
                        {/* <div>{techStackChip["keras"]}</div>
                        <div>{techStackChip["nextjs"]}</div>
                        <div>{techStackChip["pandas"]}</div>
                        <div>{techStackChip["python"]}</div>
                        <div>{techStackChip["pytorch"]}</div>
                        <div>{techStackChip["r"]}</div>
                        <div>{techStackChip["reactjs"]}</div>
                        <div>{techStackChip["tableau"]}</div>
                        <div>{techStackChip["tailwind"]}</div>
                        <div>{techStackChip["tensorflow"]}</div>
                        <div>{techStackChip["typescript"]}</div> */}
                    </Group>
                </Stack>
                <Stack className=''>
                    <Text className='font-semibold text-white'>
                        Links
                    </Text>
                </Stack>
                <Text className='font-semibold text-white'>
                    Details
                </Text>
            </Stack>
        </Stack>
    )
}
export default ProjectCard;