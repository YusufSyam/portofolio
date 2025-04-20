import { Group } from "@mantine/core";
import React from "react";
import WebsiteIcon from "../../components/WebsiteIcon.component";
import HeaderNavigationComp from "./HeaderNavigation.component";
import { scrollToAboutMe, scrollToContacts, scrollToProjects } from "../../utils/functions/scroll";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
  return (
    <Group className="px-[200px] pt-6 gap-12 justify-between">
      <WebsiteIcon />
      <Group className="gap-12">
        <HeaderNavigationComp label="about me" onClick={scrollToAboutMe}  />
        <HeaderNavigationComp label="projects" onClick={scrollToProjects} />
        <HeaderNavigationComp label="contacts" onClick={scrollToContacts} />
      </Group>
    </Group>
  );
};
export default HeaderLayout;
