import React from "react";
import MainLayout from "../../layout/Main.layout";
import { Stack } from "@mantine/core";
import HomeJumbotronSection from "./jumbotron/Home-Jumbotron.section";
import HomeAboutMeSection from "./about-me/Home-AboutMe.section";
import HomeTechStackSection from "./teach-stack/Home-TechStack.section";
import HomeProjectSection from "./projects/HomeProject.section";
import { useScrollIntoView } from "@mantine/hooks";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {



  return (
    <MainLayout>
      <Stack className="mt-10 gap-32 pb-20">
        <HomeJumbotronSection />
        <HomeAboutMeSection />
        <HomeTechStackSection />
        <HomeProjectSection />
        {/* <div className="font-bold">Halo</div> */}
      </Stack>
    </MainLayout>
  );
};
export default HomePage;
