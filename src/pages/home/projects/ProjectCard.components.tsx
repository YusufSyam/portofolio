import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import NoImage from "../../../../src/assets/images/no_image.png";
import {
  IconMachineLearningFilled,
  IconSearchFilledRounded,
  IconWebsiteFilled,
} from "../../../assets/icons/Fluent";
import Button2 from "../../../components/Button2.component";
import { techStackChip } from "../../../components/TechStackChipIcon.component";
import { ICProjects } from "../../../utils/const/interfaces";
import { TTechStack } from "../../../utils/const/types";
import {
  GithubProjectLink,
  ProjectProjectLink
} from "./ProjectLinkButton.component";

const ProjectCard: React.FC<ICProjects & { onClickDetails: (e:number) => void }> = ({
  idx,
  name,
  projectType,
  techs,
  githubLink,
  image,
  projectLink,
  shortSummary = "",
  contribution,
  onClickDetails
}) => {
  return (
    <Stack className="bg-white/[0.1] hover:bg-white/[0.2] duration-500 ease-in-out transition-all backdrop-blur-md rounded-2xl p-2 h-full relative overflow-hidden">
      <div className="w-full rounded-xl overflow-hidden z-10">
        {image == null ? (
          <div className="w-full h-48 bg-white/[0.5] p-4">
            <img
              src={NoImage}
              alt="Gambar Item"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <img
            src={image}
            alt="Gambar Item"
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      <Stack className="mx-2 pb-2">
        <Stack className=" gap-1">
          <Text className="font-quicksand-bold text-white">{name}</Text>
          <Text className="font-light text-[14px] text-white tracking-4">
            {shortSummary + ". " || " "}
            {contribution == "part" ? (
              <>
                I take{" "}
                <span className="font-semibold text-light-grey">
                  {" part "}
                </span>
                on this project
              </>
            ) : (
              <>
                I worked on the
                <span className="font-semibold text-cream">{" whole "}</span>
                project
              </>
            )}
          </Text>
        </Stack>
        <Stack className="gap-1">
          <Text className="font-semibold text-white">Techs</Text>

          <Group className="gap-2">
            {techs?.map((tech: TTechStack, techIdx: number) => {
              return <div id={"" + techIdx}>{techStackChip[tech]}</div>;
            })}
          </Group>
        </Stack>
        <Stack className="gap-1 mt-[2px]">
          <Group className="gap-2">
            <Button2
              label={"details"}
              onClickFunc={() => {
                onClickDetails(idx);
              }}
              icon={
                <IconSearchFilledRounded
                  size={18}
                  color="#334155"
                  className="mt-[2px]"
                />
              }
              bgColor="cream"
            />
            {projectLink && <ProjectProjectLink href={projectLink} />}
            {githubLink && <GithubProjectLink href={githubLink} />}
            {/* {articleLink && <ArticleProjectLink href={articleLink} />} */}
          </Group>
        </Stack>
        {/* <Stack className="gap-1">
          <Text className="font-semibold text-white">Details</Text>
          <Group className="gap-2">
            <Button1 label="Details" />
          </Group>
        </Stack> */}
      </Stack>
      {["data science", "machine learning", "iot"].includes(projectType) ? (
        <>
          <IconMachineLearningFilled
            size={120}
            color="#FFFFFF0A"
            className="blur-[1px] absolute -right-10 bottom-4 -z-10"
          />
          <IconMachineLearningFilled
            size={44}
            color="#FFFFFF0A"
            className="blur-[1px] absolute right-[72px] bottom-2 -z-10"
          />
        </>
      ) : (
        <>
          <IconWebsiteFilled
            size={100}
            color="#FFFFFF0A"
            className="blur-[1px] absolute right-10 bottom-14 -z-10"
          />
          <IconWebsiteFilled
            size={56}
            color="#FFFFFF0A"
            className="blur-[1px] absolute right-4 bottom-2 -z-10"
          />
          <IconWebsiteFilled
            size={56}
            color="#FFFFFF0A"
            className="blur-[1px] absolute -right-5 bottom-16 -z-10"
          />
        </>
      )}
    </Stack>
  );
};
export default ProjectCard;
