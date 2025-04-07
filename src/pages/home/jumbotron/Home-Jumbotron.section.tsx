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
        <Grid.Col span={7} className="flex">
          <Stack className="w-full items-end relative mt-8">
            <div className="w-[340px] rounded-full overflow-hidden z-10">
              <img
                src={jumbotron4}
                alt="Gambar Item"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-cream absolute w-[350px] h-[340px] rounded-full right-1 ">

            </div>
          </Stack>
        </Grid.Col>
        <Grid.Col span={17} className="">
          <Stack className="gap-14">
            <Stack className="mt-6 w-fit">
              <Stack className="gap-0">
                <Text className="font-quicksand-semibold text-6xl text-white tracking-5 text-center">
                  HELLO THERE, I'M <span className="text-cream">YUSUF SYAM</span>
                </Text>
                <Text className="font-quicksand-semibold text-5xl text-white tracking-5 text-center">
                  <span className="text-cream">Data Scientist</span> & Front-end Web Developer
                </Text>
              </Stack>
            </Stack>
            {/* <Group className="w-[90%]">
              <Text className="text-white text-md text-justify bg-black/15 py-4 pr-6 pl-12 border-l-4 border-grey">
                Information System graduate specializing in Artificial Intelligence,
                particularly in Computer Vision and Natural Language Processing (NLP). With
                experience leading projects such as a license plate detection system using
                YOLOv8.

              </Text>
            </Group> */}
            <Group className="gap-16 self-center mr-20">
              <InfoWithNumber info="Years of experience" number={<>2<sup>+</sup></>} />
              <MyCircleDividerComp/>
              <InfoWithNumber info="Projects" number={<>10<sup>+</sup></>} />
              <MyCircleDividerComp/>
              <InfoWithNumber info="Certificates" number={<>6<sup>+</sup></>} />
            </Group>
          </Stack>
        </Grid.Col>
      </Grid >


    </Stack>
  );
};
export default HomeJumbotronSection;

