import { Grid, Stack, Text } from '@mantine/core';
import dummyImage from '../../../../src/assets/images/camera.jpg'
import React, { useState } from 'react';
import ProjectCard from './ProjectCard.components';
import { CProjects } from '../../../utils/const/projectConts';
import { ICProjects } from '../../../utils/const/interfaces';

export interface IHomeProjectSection { }

const HomeProjectSection: React.FC<IHomeProjectSection> = ({ }) => {
    const [projectData, setProjectData] = useState(CProjects)

    console.log('asd', projectData)
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
                {
                    projectData?.map((data: ICProjects, idx: number) => {
                        return (
                            <Grid.Col id={''+idx} span={4}>
                                <ProjectCard {...data} />
                            </Grid.Col>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}
export default HomeProjectSection;