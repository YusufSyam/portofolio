import React from "react";
import MainLayout from "../../layout/Main.layout";
import { Stack } from "@mantine/core";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {
  return (
    <MainLayout>
      <Stack>
        <div className="font-bold">Halo</div>
      </Stack>
    </MainLayout>
  );
};
export default HomePage;
