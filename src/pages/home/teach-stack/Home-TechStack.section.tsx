import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import {
  IconCPPFilled,
  IconGitFilled,
  IconJavaFilled,
  IconJavascriptFilled,
  IconKerasFilled,
  IconNextJSFilled,
  IconPandasOutline,
  IconPythonFilled,
  IconPytorchOutline,
  IconReactOutline,
  IconRStudioFilled,
  IconTableauOutline,
  IconTailwindOutline,
  IconTensorflowFilled,
  IconTypescriptFilled,
  IconWordpressFilled,
} from "../../../assets/icons/Fluent";
import { getGithubSearchLanguageLink, getGithubSearcQueryLink } from "../../../utils/functions/githubTechRepoSearch";

export interface IHomeTechStackSection {}

function openListRepoByTechStack(stack: string, isLang?: boolean) {
  if(isLang){
    window.open(getGithubSearchLanguageLink(stack), "_blank", "noopener,noreferrer");
  }else{
    window.open(getGithubSearcQueryLink(stack), "_blank", "noopener,noreferrer");
  }
}

const HomeTechStackSection: React.FC<IHomeTechStackSection> = ({}) => {
  return (
    <Stack className="mx-4 sm:mx-12 md:mx-20 lg:mx-40">
      <Text className="font-quicksand-semibold text-4xl md:text-5xl text-white tracking-5 text-center">
        tech stack
      </Text>
      <Text className="text-white text-center text-lgp tracking-4 -mt-4">
        Programming languages, frameworks and tools i used
      </Text>
      <Group className="justify-between md:justify-normal gap:4 md:gap-8 self-center w-fit mt-4">
        <IconPythonFilled
          onClick={() => {
            openListRepoByTechStack("python", true);
          }}
          size={44}
          color="white"
          className="cursor-pointer"
        />
        <IconTypescriptFilled
          size={44}
          onClick={() => {
            openListRepoByTechStack("typescript", true);
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconJavascriptFilled
          size={44}
          onClick={() => {
            openListRepoByTechStack("javascript", true);
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconJavaFilled
          size={44}
          onClick={() => {
            openListRepoByTechStack("java", true);
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconCPPFilled
          size={44}
          onClick={() => {
            openListRepoByTechStack("c%2B%2B", true);
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconRStudioFilled
          size={46}
          onClick={() => {
            openListRepoByTechStack("r", true);
          }}
          color="white"
          className="cursor-pointer"
        />
      </Group>
      <Group className="justify-evenly md:justify-normal gap:4 md:gap-8  self-center w-fit">
        <IconTensorflowFilled
          size={42}
          onClick={() => {
            openListRepoByTechStack("tensorflow");
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconKerasFilled
          size={42}
          onClick={() => {
            openListRepoByTechStack("keras");
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconPytorchOutline
          size={44}
          onClick={() => {
            openListRepoByTechStack("pytorch");
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconPandasOutline
          size={44}
          onClick={() => {
            openListRepoByTechStack("pandas");
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconTableauOutline
          size={44}
          color="white"
        />
        <IconReactOutline
          size={44}
          onClick={() => {
            openListRepoByTechStack("react");
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconNextJSFilled
          size={42}
          onClick={() => {
            openListRepoByTechStack("next");
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconTailwindOutline
          size={44}
          onClick={() => {
            openListRepoByTechStack("tailwind");
          }}
          color="white"
          className="cursor-pointer"
        />
        <IconGitFilled
          size={44}
          color="white"
        />
        <IconWordpressFilled
          size={42}
          color="white"
        />
      </Group>
    </Stack>
  );
};
export default HomeTechStackSection;
