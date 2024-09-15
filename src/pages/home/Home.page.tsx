import React from "react";
import MainLayout from "../../layout/Main.layout";
import { Stack } from "@mantine/core";
import HomeJumbotronSection from "./jumbotron/Home-Jumbotron.section";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {
  return (
    <MainLayout>
      <Stack className="mt-10">
        <HomeJumbotronSection />
        <div className="font-bold">Halo</div>
      </Stack>
    </MainLayout>
  );
};
export default HomePage;
