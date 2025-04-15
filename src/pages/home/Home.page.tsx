import React from "react";
import MainLayout from "../../layout/Main.layout";
import { Stack } from "@mantine/core";
import HomeJumbotronSection from "./jumbotron/Home-Jumbotron.section";
import HomeAboutMeSection from "./about-me/Home-AboutMe.section";
import HomeTechStackSection from "./teach-stack/Home-TechStack.section";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {

  console.log('semoga saya rajin kerja ya Allah Aamiinn')
  return (
    <MainLayout>
      <Stack className="mt-10 gap-16 pb-20">
        <HomeJumbotronSection />
        <HomeAboutMeSection />
        <HomeTechStackSection />
        {/* <div className="font-bold">Halo</div> */}
      </Stack>
    </MainLayout>
  );
};
export default HomePage;
