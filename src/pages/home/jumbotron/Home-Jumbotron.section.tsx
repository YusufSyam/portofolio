import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { IconDownload, IconSearchFilledRounded } from "../../../assets/icons/Fluent";
import jumbotron4 from "../../../assets/images/jumbotron4.jpg";
import Button1 from "../../../components/Button1.component";
import Contacts from "../../../components/Contacts.component";

export interface IHomeJumbotronSection { }

const HomeJumbotronSection: React.FC<IHomeJumbotronSection> = ({ }) => {
  return (
    <Stack className="gap-20 mb-8">
      <Grid gutter={54} columns={24} className="">
        <Grid.Col span={8} className="flex">
          <Stack className="w-full items-end relative">
            <div className="w-[290px] rounded-full overflow-hidden z-10">
              <img
                src={jumbotron4}
                alt="Gambar Item"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-cream absolute w-[294px] h-[294px] rounded-full right-[-1px] top-[-1px] ">
            </div>
          </Stack>
        </Grid.Col>
        <Grid.Col span={16} className="">
          <Stack className="gap-4 ">
            <Stack className="w-fit">
              <Stack className="gap-0">
                <Text className="font-quicksand-semibold text-5xl text-white tracking-5 text-left">
                  HELLO THERE, I'M <span className="text-cream">YUSUF SYAM</span>
                  {/* hello there, i'm <span className="text-cream">yusuf syam</span> */}
                </Text>
                <Text className="font-quicksand-semibold text-3xl text-white tracking-5 text-left">
                  <span className="text-cream">Data Scientist</span> & Front-end Web Developer
                </Text>
              </Stack>
            </Stack>
            <Stack className="w-[85%] mt-4">
              <Group className=" relative">
                <Text className="text-white text-[17px] text-start py-4  tracking-4">
                  {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis corrupti eius quod? Eius repudiandae optio at excepturi quia voluptas, obcaecati ex assumenda omnis mollitia, doloremque corrupti? */}
                  I am an Information Systems graduate focused on AI and Computer Vision. Curious, driven, and always eager to learn and build impactful solutions
                </Text>
              </Group>
              <Group className="justify-between mr-6 ">
                <Group>
                  <Button1 label="cv" icon={<IconDownload color="white" className="self-center mt-[2px]" size={22} />} />
                  <Button1 label="more" icon={<IconSearchFilledRounded color="white" className="self-center mt-[2px]" size={21} />} />
                </Group>
                <Contacts />
              </Group>
            </Stack>
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

