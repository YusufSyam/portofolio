import { Grid, Group, Stack, Text } from '@mantine/core';
import dummyImage from '../../../../src/assets/images/camera.jpg'
import React from 'react';
import { techStackChip, TTechStack } from '../../../components/TechStackChipIcon.component';
import Button2 from '../../../components/Button2.component';
import { IconGithubColoured, IconGithubFilled, IconMachineLearningFilled, IconRightArrowNoTail, IconWebsiteFilled } from '../../../assets/icons/Fluent';
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
    role,
    shortSummary = ""
}) => {
    return (
        <Stack className='bg-white/[0.1] backdrop-blur-md rounded-2xl p-2 h-full relative overflow-hidden'>
            <div className="w-full rounded-xl overflow-hidden z-10">
                <img
                    src={image}
                    alt="Gambar Item"
                    className="w-full h-48 object-cover"
                />
            </div>
            <Stack className='mx-2 pb-2'>
                <Stack className=' gap-1'>
                    <Text className='font-quicksand-bold text-white'>
                        {name}
                    </Text>
                    <Text className='font-light text-[14px] text-white tracking-4'>
                        {shortSummary + ". " || " "}A
                        <span className='font-semibold text-cream'>
                            {" " + projectType + " "}
                        </span>
                        project
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
                            projectLink &&
                            <ProjectProjectLink href={projectLink} />
                        }
                        {
                            githubLink &&
                            <GithubProjectLink href={githubLink} />
                        }
                        {
                            articleLink &&
                            <ArticleProjectLink href={articleLink} />
                        }
                    </Group>
                </Stack>
            </Stack>
            {
                ["data science", "machine learning", "iot"].includes(projectType) ?
                    <>
                        <IconMachineLearningFilled size={120} color='#FFFFFF0A' className='blur-[1px] absolute -right-10 bottom-4 -z-10' />
                        <IconMachineLearningFilled size={44} color='#FFFFFF0A' className='blur-[1px] absolute right-[72px] bottom-2 -z-10' />
                    </>
                    :
                    <>
                        <IconWebsiteFilled size={100} color='#FFFFFF0A' className='blur-[1px] absolute right-10 bottom-14 -z-10' />
                        <IconWebsiteFilled size={56} color='#FFFFFF0A' className='blur-[1px] absolute right-4 bottom-2 -z-10' />
                        <IconWebsiteFilled size={56} color='#FFFFFF0A' className='blur-[1px] absolute -right-5 bottom-16 -z-10' />
                    </>
            }
        </Stack>
    )
}
export default ProjectCard;