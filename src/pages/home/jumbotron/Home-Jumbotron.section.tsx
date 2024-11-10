import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import jumbotron1 from "../../../assets/images/jumbotron1.jpg";
import MyDividerComp from "../../../components/MyDivider.component";

export interface IHomeJumbotronSection {}

const HomeJumbotronSection: React.FC<IHomeJumbotronSection> = ({}) => {
  return (
    <Grid>
      <Grid.Col span={7}>
        <Stack className="gap-2 relative w-fit">
          <Text className="text-white text-2xl font-alkatra">
            Hello There, I am
          </Text>
          <Stack className="gap-0">
            <Text className="font-poppins text-white text-[54px] -mb-2 z-50 [text-shadow:_0_2px_18px_rgb(0_0_0_/_60%)]">
              Muh. Yusuf Syam
            </Text>
            <Text className="font-poppins text-white/[0.75] text-xl">
              Data Scientist
            </Text>
            <div className="mt-1">
              <MyDividerComp />
            </div>
          </Stack>
          <Text className="absolute w-2/3 text-white -bottom-60 tracking-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            soluta fuga nemo hic facere, sequi voluptatum necessitatibus debitis
            odit. Consectetur eum consequuntur unde suscipit dolore, odit
            laborum rerum aliquam ab earum ut nulla, perspiciatis debitis!
            Corrupti optio omnis enim nihil atque facere vero, non architecto
            eos earum aspernatur neque assumenda!
          </Text>
          <div className="w-[340px] rounded-md overflow-hidden absolute z-10 -right-64 -top-6">
            <img
              src={jumbotron1}
              alt="Gambar Item"
              className="w-full h-full object-cover"
            />
          </div>
        </Stack>
      </Grid.Col>
      <Grid.Col span={5} className="">
        <Stack className="w-full mx-8 gap-8">
          <Stack className="bg-white/10 backdrop-blur-3xl rounded-lg p-8 bg-white">
            <Text className="text-white font-poppins text-3xl">
              Let's Connect
            </Text>
            <Text>Let's Connect</Text>
            <Text>Let's Connect</Text>
          </Stack>
          <Stack className="bg-white/10 backdrop-blur-3xl rounded-lg p-8 bg-white">
            <Text className="text-white font-poppins text-3xl">
              Let's Connect
            </Text>
            <Text>Let's Connect</Text>
            <Text>Let's Connect</Text>
          </Stack>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
export default HomeJumbotronSection;
