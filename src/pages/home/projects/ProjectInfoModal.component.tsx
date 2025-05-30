import React, { useEffect, useState } from "react";
import InfoModal from "../../../components/InfoModal.component";
import NoImage from "../../../../src/assets/images/no_image.png";
import {
  IAnotherProjectLink,
  ICProjects,
} from "../../../utils/const/interfaces";
import { Group, Stack, Text } from "@mantine/core";
import { CProjects } from "../../../utils/const/projectConts";
import { toTitleCase } from "../../../utils/functions/string";
import {
  ProjectProjectLink,
  GithubProjectLink,
  ArticleProjectLink,
  ProjectAnotherLink,
} from "./ProjectLinkButton.component";

export interface IProjectInfoModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDataIndex?: number | null;
}

const ProjectInfoModal: React.FC<IProjectInfoModal> = ({
  opened,
  setOpened,
  selectedDataIndex,
}) => {
  const [selectedProject, setSelectedProject] = useState<ICProjects>(
    CProjects?.[selectedDataIndex || 0]
  );

  useEffect(() => {
    if (selectedDataIndex != null) {
      setSelectedProject(CProjects?.[selectedDataIndex || 0]);
    }
  }, [selectedDataIndex]);

  return (
    <InfoModal
      opened={opened}
      setOpened={setOpened}
      title={`Details of ${selectedProject?.name} Project`}
      onClose={() => {}}
      onSubmit={() => {
        setOpened(false);
      }}
      minWidth={1000}
    >
      <Stack className="">
        <div className="w-full rounded-xl overflow-hidden z-10">
          {selectedProject?.image == null ? (
            <div className="w-full h-48 bg-black/[0.2] p-2 md:p-4">
              <img
                src={NoImage}
                alt="Gambar Item"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <img
              src={selectedProject?.image}
              alt="Gambar Item"
              className="w-full h-72 object-cover"
            />
          )}
        </div>
        <Text className="text-dark-grey text-justify tracking-4 mt-4">
          {selectedProject?.summary}
        </Text>
        <Stack className="gap-0">
          <Text className="text-dark-grey text-justify tracking-4 font-bold">
            Role
          </Text>
          <Text className="text-dark-grey text-justify tracking-4">
            {selectedProject?.role?.map((e: String, idx: number) => {
              return idx == selectedProject?.role!.length - 1 ? e : `${e}, `;
            })}
          </Text>
        </Stack>
        <Stack className="gap-0">
          <Text className="text-dark-grey text-justify tracking-4 font-bold">
            Techs
          </Text>
          <Text className="text-dark-grey text-justify tracking-4">
            {selectedProject?.techs?.map((e: String, idx: number) => {
              return toTitleCase(
                idx == selectedProject?.techs!.length - 1 ? e : `${e}, `
              );
            })}
            {selectedProject?.additionalTechs && (
              <span className="">{", "}
                {selectedProject?.additionalTechs?.map((e: String, idx: number) => {
                  return (
                    idx == selectedProject?.additionalTechs!.length - 1 ? e : `${e}, `
                  );
                })}
              </span>
            )}
          </Text>
        </Stack>
        <Stack className="gap-1">
          <Text className="text-dark-grey text-justify tracking-4 font-bold">
            Links
          </Text>
          <Group className="gap-2">
            {selectedProject?.projectLink && (
              <ProjectProjectLink href={selectedProject?.projectLink} />
            )}
            {selectedProject?.githubLink && (
              <GithubProjectLink href={selectedProject?.githubLink} />
            )}
            {selectedProject?.articleLink && (
              <ArticleProjectLink href={selectedProject?.articleLink} />
            )}
            {selectedProject?.anotherLinks && (
              <>
                {selectedProject?.anotherLinks?.map(
                  (data: IAnotherProjectLink) => {
                    return (
                      <ProjectAnotherLink
                        href={data?.href}
                        label={data?.linkName}
                        type={data?.type || "other"}
                      />
                    );
                  }
                )}
              </>
            )}
          </Group>
        </Stack>
      </Stack>
    </InfoModal>
  );
};
export default ProjectInfoModal;
