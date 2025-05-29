import { Grid, Pagination, Stack, Text, useMantineTheme } from "@mantine/core";
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { MySearchInput } from "../../../components/FormInput.component";
import { ICProjects } from "../../../utils/const/interfaces";
import { CProjects } from "../../../utils/const/projectConts";
import ProjectCard from "./ProjectCard.components";
import ProjectInfoModal from "./ProjectInfoModal.component";

export interface IHomeProjectSection {}

const HomeProjectSection: React.FC<IHomeProjectSection> = ({}) => {
  const theme = useMantineTheme();
  const [projectData] = useState<Array<ICProjects>>(CProjects);
  const [activePage, setActivePage] = useState<number>(1);
  const [openModal, setOpenModal] = useState(false);
  
  const isMdUp = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  const [displayedData, setDisplayedData] =
    useState<Array<ICProjects>>(projectData);
  const [selectedDataIndex, setSelectedDataIndex] = useState<number | null>(
    null
  );

  // const [filter, setFilter] = useState<TDetectionFilter>("semua");
  const [searchInput, setSearchInput] = useState<string>("");
  const [query] = useDebouncedValue(searchInput, 500);

  const dataPerPageAmount = isMdUp ? 6 : 4;;
  const [pageAmount, setPageAmount] = useState(
    Math.round(displayedData?.length / dataPerPageAmount + 0.4)
  );

  useEffect(() => {
    setPageAmount(Math.round(displayedData?.length / dataPerPageAmount + 0.4));
    setActivePage(1);
  }, [displayedData]);

  useEffect(() => {
    let searchLowerCase = query?.toLowerCase();

    const filteredProjects = projectData.filter((project) => {
      const nameMatch = project.name
        .toLowerCase()
        .includes(searchLowerCase.toLowerCase());
      const techMatch = project.techs.some((tech) =>
        tech.toLowerCase().includes(searchLowerCase.toLowerCase())
      );
      return nameMatch || techMatch;
    });

    setDisplayedData(filteredProjects);

    setActivePage(1);
  }, [query]);

  useEffect(()=>{
    if(!openModal){
      setSelectedDataIndex(null)
    }
  }, [openModal])

  useEffect(() => {
    if (selectedDataIndex != null) {
      setOpenModal(true);
    }
  }, [selectedDataIndex]);

  console.log("asd", projectData);
  return (
    <Stack id="section-projects" className="mx-0 lg:mx-20 bg-[#000000] sm:bg-[#999999] md:bg-[#CCCCCC] lg:bg-[#FFFFFF]">
      <ProjectInfoModal
        opened={openModal}
        setOpened={setOpenModal}
        selectedDataIndex={selectedDataIndex}
      />
      <Stack className="mb-8 mx-4 md:mx-12 lg:mx-16">
        <Text className="font-quicksand-semibold text-4xl md:text-5xl text-white tracking-5 text-center">
          projects
        </Text>
        <Text className="text-white text-center text-lgp tracking-4 -mt-4">
          A collection of my works across web development and machine learning
        </Text>
      </Stack>
      <div className="self-end">
        <MySearchInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchInput(event.target.value)
          }
          w={240}
          placeholder="search name, techs.."
        />
      </div>
      <Stack>
        <Grid gutter={36} className="items-stretch">
          {displayedData
            ?.slice(
              (activePage - 1) * dataPerPageAmount,
              (activePage - 1) * dataPerPageAmount + dataPerPageAmount
            )
            ?.map((data: ICProjects, idx: number) => {
              return (
                <Grid.Col id={"" + idx} span={12} sm={6} md={4}>
                  <ProjectCard
                    {...data}
                    onClickDetails={(idx: number) => {
                      setSelectedDataIndex(idx);
                    }}
                  />
                </Grid.Col>
              );
            })}
        </Grid>
        <Pagination
          onChange={setActivePage}
          value={activePage}
          total={pageAmount}
          disabled={pageAmount == 0}
          withEdges
          color="dark-grey"
          className="self-center mt-8"
          styles={{
            control: {
              color: theme.colors["white"][5],
              borderRadius: "999px",
              padding: "18px 14px",
              border: "1px solid #FFFFFF",
              fontFamily: "poppins",
              backgroundColor: "#FFFFFF1F",
              ":hover": {
                backgroundColor: theme.colors["dark-grey"][5] + " !important",
                color: theme.colors["white"][5],
              },
            },
          }}
        />
      </Stack>
    </Stack>
  );
};
export default HomeProjectSection;
