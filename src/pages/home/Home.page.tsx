import { Stack } from "@mantine/core";
import React from "react";
import MainLayout from "../../layout/Main.layout";
import HomeAboutMeSection from "./about-me/Home-AboutMe.section";
import HomeJumbotronSection from "./jumbotron/Home-Jumbotron.section";
import HomeProjectSection from "./projects/Home-Project.section";
import HomeTechStackSection from "./teach-stack/Home-TechStack.section";
import HomeJumbotronParallaxSection from "./jumbotron/Home-JumbotronParallax.section";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {
  return (
    <MainLayout>
      <Stack className="gap-28 sm:gap-32 pb-10 sm:pb-16 md:pb-20">
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
