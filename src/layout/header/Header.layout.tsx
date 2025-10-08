import { Burger, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import WebsiteIcon from "../../components/WebsiteIcon.component";
import {
  scrollToAboutMe,
  scrollToContacts,
  scrollToProjects,
} from "../../utils/functions/scroll";
import HeaderNavigationComp from "./HeaderNavigation.component";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
  const [burgerOpened, { toggle }] = useDisclosure(false);
  const label = burgerOpened ? "Close navigation" : "Open navigation";

  return (
    <Group className="sm:px-[64px] md:px-[100px] lg:px-[200px] px-[32px] pb-4 pt-10 sm:pt-8 md:pt-6 md:flex-nowrap justify-between relative z-10">
      <WebsiteIcon />
      <Group className="md:gap-12 gap-8 md:flex-nowrap hidden sm:flex">
        <HeaderNavigationComp label="about me" onClick={scrollToAboutMe} />
        <HeaderNavigationComp label="projects" onClick={scrollToProjects} />
        <HeaderNavigationComp label="contacts" onClick={scrollToContacts} />
      </Group>
      <div className="relative block sm:hidden">
        <Burger
          color={"#FFFFFF"}
          opened={burgerOpened}
          onClick={toggle}
          aria-label={label}
          className=""
        />

        {burgerOpened && (
          <>
            <Stack className="absolute bg-dark-grey w-32 h-fit right-[3px] py-4 px-6 rounded-xl top-10 z-20">
              <HeaderNavigationComp
                label="about me"
                onClick={scrollToAboutMe}
              />
              <HeaderNavigationComp
                label="projects"
                onClick={scrollToProjects}
              />
              <HeaderNavigationComp
                label="contacts"
                onClick={scrollToContacts}
              />
            </Stack>
            <div className="absolute w-4 h-4 rotate-45 top-[38px] right-2 bg-dark-grey z-10 rounded-sm"></div>
          </>
        )}
      </div>
    </Group>
  );
};
export default HeaderLayout;
