import { Grid, Pagination, Stack, Text, useMantineTheme } from '@mantine/core';
import dummyImage from '../../../../src/assets/images/camera.jpg'
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard.components';
import { CProjects } from '../../../utils/const/projectConts';
import { ICProjects } from '../../../utils/const/interfaces';
import { useDebouncedValue } from '@mantine/hooks';

export interface IHomeProjectSection { }

const HomeProjectSection: React.FC<IHomeProjectSection> = ({ }) => {
    const theme= useMantineTheme();
    const [projectData, setProjectData] = useState<Array<ICProjects>>(CProjects)
    const [activePage, setActivePage] = useState<number>(1);

    const [displayedData, setDisplayedData] = useState<Array<ICProjects>>(projectData);
    // const [filter, setFilter] = useState<TDetectionFilter>("semua");
    const [searchInput, setSearchInput] = useState<string>("");
    const [query] = useDebouncedValue(searchInput, 500);

    const dataPerPageAmount = 6;
    const [pageAmount, setPageAmount] = useState(Math.round(displayedData?.length / dataPerPageAmount + 0.4))

    useEffect(() => {
        setPageAmount(Math.round(displayedData?.length / dataPerPageAmount + 0.4));
    }, [displayedData]);


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
            <Stack>

                <Grid gutter={48} className='items-stretch'>
                    {
                        projectData?.slice(
                            (activePage - 1) * dataPerPageAmount,
                            (activePage - 1) * dataPerPageAmount + dataPerPageAmount
                            )?.map((data: ICProjects, idx: number) => {
                                return (
                                    <Grid.Col id={'' + idx} span={4} className=''>
                                        <ProjectCard {...data} />
                                    </Grid.Col>
                                )
                            })
                    }
                </Grid>
                <Pagination
                    onChange={setActivePage}
                    total={pageAmount}
                    disabled={pageAmount == 0}
                    withEdges
                    color='dark-grey'
                    className='self-center mt-4'
                    styles={{
                        control: {
                          color: theme.colors["white"][5],
                          borderRadius: "999px",
                          padding: "18px 14px",
                          border: "0px solid #d4d3e7",
                          fontFamily: "poppins",
                          backgroundColor: "#FFFFFF1F",
                          ":active": {
                            color: theme.colors["dark-grey"][5] + " !important"
                          },
                          ":hover": {
                            backgroundColor:
                              theme.colors["dark-grey"][5] + " !important",
                            color: theme.colors["white"][5]
                          },
                        }
                      }}
                />
            </Stack>
        </Stack>
    )
}
export default HomeProjectSection;