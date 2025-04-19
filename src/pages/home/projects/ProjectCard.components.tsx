import { Grid, Group, Stack, Text } from '@mantine/core';
import dummyImage from '../../../../src/assets/images/camera.jpg'
import React from 'react';
import { techStackChip, TTechStack } from '../../../components/TechStackChipIcon.component';
import Button2 from '../../../components/Button2.component';
import { IconGithubColoured, IconGithubFilled, IconRightArrowNoTail } from '../../../assets/icons/Fluent';
import { ArticleProjectLink, GithubProjectLink, ProjectProjectLink } from './ProjectLinkButton.component';
import { ICProjects } from '../../../utils/const/interfaces';

const ProjectCard: React.FC<ICProjects> = ({
    name,
    projectType,
    summary,
    techs,
    articleLink,
    githubLink,
    image = dummyImage,
    projectLink,
    role
}) => {
    return (

        <Stack className='bg-white/[0.1] backdrop-blur-md rounded-2xl p-2'>
            <div className="w-full rounded-xl overflow-hidden z-10">
                <img
                    src={image}
                    alt="Gambar Item"
                    className="w-full h-48 object-cover"
                />
            </div>
            <Stack className='mx-2 pb-2'>
                <Stack className=' gap-1'>
                    <Text className='font-quicksand-semibold text-white'>
                        {name}
                    </Text><Text className='font-light text-[14px] text-white'>
                        a {projectType} project
                    </Text>
                </Stack>
                <Stack className='gap-1'>
                    <Text className='font-semibold text-white'>
                        Techs
                    </Text>

                    <Group className='gap-2'>
                        {
                            techs?.map((tech: TTechStack, idx: number) => {
                                return (
                                    <div id={'' + idx}>{techStackChip[tech]}</div>

                                )
                            })
                        }
                    </Group>
                </Stack>
                <Stack className='gap-1'>
                    <Text className='font-semibold text-white'>
                        Links
                    </Text>
                    <Group className='gap-2'>
                        {
                            githubLink &&
                            <GithubProjectLink href={githubLink} />
                        }
                        {
                            projectLink &&
                            <ProjectProjectLink href={projectLink} />
                        }
                        {
                            articleLink &&
                            <ArticleProjectLink href={articleLink} />
                        }
                    </Group>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default ProjectCard;