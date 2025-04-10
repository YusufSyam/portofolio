import React from "react";
import MainLayout from "../../layout/Main.layout";
import { Stack } from "@mantine/core";
import HomeJumbotronSection from "./jumbotron/Home-Jumbotron.section";
import HomeAboutMeSection from "./about-me/Home-AboutMe.section";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {

  console.log('semoga saya rajin kerja ya Allah Aamiinn')
  return (
    <MainLayout>
      <Stack className="mt-10 gap-28">
        <HomeJumbotronSection />
        <HomeAboutMeSection />

        {/* <div className="font-bold">Halo</div> */}
      </Stack>
    </MainLayout>
  );
};
export default HomePage;
