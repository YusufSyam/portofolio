import { Button, Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import jumbotron4 from "../../../assets/images/jumbotron4.jpg";
import { DownArrowNoTailOutlineBold, IconDownload, IconGithubColoured, IconGmailColored, IconGmailColored2, IconGmailFilled, IconInstagramColoured, IconInstagramFilled, IconLinkedinColoured, IconLinkedinFilled, IconSearchFilledRounded, IconSearchOutlined, IconWorkFilled } from "../../../assets/icons/Fluent";
import Button1 from "../../../components/Button1.component";
import Button2 from "../../../components/Button2.component";

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
                  Information Systems graduate focused on AI and Computer Vision. Curious, driven, and always eager to learn and build impactful solutions
                </Text>
              </Group>
              <Group className="justify-between mr-6 ">
                <Group>
                  <Button1 label="cv" icon={<IconDownload color="white" className="self-center mt-[2px]" size={22} />} />
                  <Button1 label="more" icon={<IconSearchFilledRounded color="white" className="self-center mt-[2px]" size={21} />} />
                </Group>
                <Group>
                  <Text className="font-quicksand-semibold text-xl text-white self-end">
                    contacts :
                  </Text>
                  <Group className="bg-white/[0.1] rounded-full px-6 py-2 gap-6">
                    <IconGmailFilled color="white" size={24} className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] " />
                    <IconLinkedinFilled color="white" size={26} className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] " />
                    <IconInstagramFilled color="white" size={28} className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] " />
                  </Group>
                </Group>
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

