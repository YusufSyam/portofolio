import React, { useEffect, useState } from "react";
import InfoModal from "../../../components/InfoModal.component";
import { ICProjects } from "../../../utils/const/interfaces";
import { Stack, Text } from "@mantine/core";
import { CProjects } from "../../../utils/const/projectConts";

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
      <Stack>
        <Text>{"Working on this :))"}</Text>
      </Stack>
    </InfoModal>
  );
};
export default ProjectInfoModal;
