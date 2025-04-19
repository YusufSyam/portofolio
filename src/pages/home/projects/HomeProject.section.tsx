import { Grid, Stack, Text } from '@mantine/core';
import dummyImage from '../../../../src/assets/images/camera.jpg'
import React from 'react';
import ProjectCard from './ProjectCard.components';

export interface IHomeProjectSection { }

const HomeProjectSection: React.FC<IHomeProjectSection> = ({ }) => {
    return (
        <Stack className="mx-24">
            <Stack className='mb-8 mx-16'>
                <Text className="font-quicksand-semibold text-5xl text-white tracking-5 text-center">
                    projects
                </Text>
                <Text className="text-white text-center text-lgp tracking-4 -mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, earum.
                </Text>
            </Stack>
            <Grid gutter={48}>
                <Grid.Col span={4}>
                    <ProjectCard />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard />
                </Grid.Col>
                <Grid.Col span={4}>
                    <ProjectCard />
                </Grid.Col>
            </Grid>
        </Stack>
    )
}
export default HomeProjectSection;