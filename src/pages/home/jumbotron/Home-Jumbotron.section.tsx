import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import jumbotron1 from "../../../assets/images/jumbotron1.jpg";
import jumbotron4 from "../../../assets/images/jumbotron4.jpg";
import MyDividerComp from "../../../components/MyDivider.component";
import InfoWithNumber from "../../../components/InfoWithNumber.component";
import MyCircleDividerComp from "../../../components/MyDivider.component copy";

export interface IHomeJumbotronSection { }

const HomeJumbotronSection: React.FC<IHomeJumbotronSection> = ({ }) => {
  return (
    <Stack className="gap-20">
      <Grid gutter={54} columns={24}>
        <Grid.Col span={8} className="flex">
          <Stack className="w-full items-end relative mt-8">
            <div className="w-[360px] rounded-full overflow-hidden z-10">
              <img
                src={jumbotron4}
                alt="Gambar Item"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-grey absolute w-[365px] h-[365px] rounded-full right-1 ">

            </div>
          </Stack>
        </Grid.Col>
        <Grid.Col span={16} className="">
          <Stack className="gap-10">
            <Stack className="mt-6 w-fit">
              <Stack className="gap-0">
                <Text className="font-quicksand-semibold text-6xl text-white tracking-5 text-left">
                  HELLO THERE, I'M <span className="text-cream">YUSUF SYAM</span>
                </Text>
                <Text className="font-quicksand-semibold text-4xl text-white tracking-5 text-left">
                  <span className="text-cream">Data Scientist</span> & Front-end Web Developer
                </Text>
              </Stack>
            </Stack>
            <Group className="w-[90%]">
              <Text className="text-white text-lg text-center bg-black/5 py-4 px-8  border-grey tracking-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis corrupti eius quod? Eius repudiandae optio at excepturi quia voluptas, obcaecati ex assumenda omnis mollitia, doloremque corrupti? Officiis, minima recusandae? Tempora.
              </Text>
            </Group>
            <Group className="justify-between w-full mt-8">
              <Group className="cursor-pointer duration-200 ease-in-out transition-all px-6 py-2 rounded-full bg-white/[0.1] hover:translate-x-[2px] hover:translate-y-[-2px]">
                <Text className="text-white font-quicksand text-xl tracking-4">
                  projects
                </Text>
              </Group>
              <Group className="cursor-pointer duration-200 ease-in-out transition-all px-6 py-2 rounded-full bg-white/[0.1] hover:translate-x-[2px] hover:translate-y-[-2px]">
                <Text className="text-white font-quicksand text-xl tracking-4">
                  curriculum vitae
                </Text>
              </Group>
              <Group className="cursor-pointer duration-200 ease-in-out transition-all px-6 py-2 rounded-full bg-white/[0.1] hover:translate-x-[2px] hover:translate-y-[-2px]">
                <Text className="text-white font-quicksand text-xl tracking-4">
                  lorem
                </Text>
              </Group>
              <Group className="cursor-pointer duration-200 ease-in-out transition-all px-6 py-2 rounded-full bg-white/[0.1] hover:translate-x-[2px] hover:translate-y-[-2px]">
                <Text className="text-white font-quicksand text-xl tracking-4">
                  projects
                </Text>
              </Group>
              <Group className="cursor-pointer duration-200 ease-in-out transition-all px-6 py-2 rounded-full bg-white/[0.1] hover:translate-x-[2px] hover:translate-y-[-2px]">
                <Text className="text-white font-quicksand text-xl tracking-4">
                  projects
                </Text>
              </Group>
              
            </Group>
            {/* <Group className="gap-16 self-center mr-20">
              <InfoWithNumber info="Years of experience" number={<>2<sup>+</sup></>} />
              <MyCircleDividerComp/>
              <InfoWithNumber info="Projects" number={<>10<sup>+</sup></>} />
              <MyCircleDividerComp/>
              <InfoWithNumber info="Certificates" number={<>6<sup>+</sup></>} />
            </Group> */}
          </Stack>
        </Grid.Col>
      </Grid >


    </Stack>
  );
};
export default HomeJumbotronSection;

