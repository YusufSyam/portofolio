import { Grid, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import FDHomeCountdownComp from "./FDHomeCountdown.component";
import FDChat from "./FDChat.component";
import { IconRightArrowNoTail } from "../../../../../../assets/icons/Fluent";
import { Link } from "react-router-dom";
import gdLogo from "../../assets/images/logo_gd.png";
import ttLogo from "../../assets/images/logo_tt.png";

export interface IFDHomeSection3 {}

const FDHomeSection3: React.FC<IFDHomeSection3> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Stack>
      <Text className="text-secondary-text-500 text-[48px] text-center font-poppins-semibold tracking-5">
        bonus
      </Text>
      <Grid gutter={32} className="flex">
        <Grid.Col span={4} className="self-center">
          <div className="relative z-10 mx-auto">
            <Stack className="bg-secondary rounded-[32px] px-6 py-6 z-10">
              <Group className="">
                <div className={`w-8 z-10`}>
                  <img
                    src={gdLogo}
                    alt="Gambar Item"
                    className="w-full h-full object-"
                  />
                </div>
                <Text className="text-primary-text-2 font-roboto-semibold text-3xl tracking-5">
                  Drive Gitar Ucup
                </Text>
              </Group>
              <Grid className="" gutter={0}>
                <Grid.Col span={10} className="my-auto">
                  <Text className="text-primary-text-1">Drive yang isinya ucup main gitar.</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Link target="_blank" to={"https://drive.google.com/drive/folders/1fKh9wsy_xlqIeB14tlsrfBkKtZyKqq9E?usp=drive_link"} className="">
                    <IconRightArrowNoTail
                      size={44}
                      className="bg-secondary-text-500 hover:bg-opacity-75 duration-100 cursor-pointer rounded-full p-1 mx-auto"
                      color={theme.colors["white"][5]}
                    />
                  </Link>
                </Grid.Col>
              </Grid>
            </Stack>
            <div className="w-full h-full absolute -bottom-2 -left-2 bg-secondary-text-500 rounded-[32px] -z-10"></div>
          </div>
        </Grid.Col>

        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa? */}

        <Grid.Col span={4} className="self-center">
          <div className="relative z-10 mx-auto">
            <Stack className="bg-fd-light-pink rounded-[32px] px-6 py-6 z-10">
              <Group className="">
                <div className={`w-8 z-10`}>
                  <img
                    src={ttLogo}
                    alt="Gambar Item"
                    className="w-full h-full object-"
                  />
                </div>
                <Text className="text-primary-text-2 font-roboto-semibold text-3xl tracking-5">
                  HBD Dhea
                </Text>
              </Group>
              <Grid className="" gutter={0}>
                <Grid.Col span={10} className="my-auto">
                  <Text className="text-primary-text-1">Kumpulan video ucapan untuk Dhea</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Link target="_blank" to={"#"} className="">
                    <IconRightArrowNoTail
                      size={44}
                      className="bg-fd-dark-pink hover:bg-opacity-75 duration-100 cursor-pointer rounded-full p-1 mx-auto"
                      color={theme.colors["primary-text-1"][5]}
                    />
                  </Link>
                </Grid.Col>
              </Grid>
            </Stack>
            <div className="w-full h-full absolute -bottom-2 -left-2 bg-fd-dark-pink rounded-[32px] -z-10"></div>
          </div>
        </Grid.Col>

        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa? */}

        <Grid.Col span={4} className="self-center">
          <div className="relative z-10 mx-auto">
            <Stack className="bg-fd-cream rounded-[32px] px-6 py-6 z-10">
              <Group className="">
                <div className={`w-8 z-10`}>
                  <img
                    src={gdLogo}
                    alt="Gambar Item"
                    className="w-full h-full object-"
                  />
                </div>
                <Text className="text-primary-text-2 font-roboto-semibold text-3xl tracking-5">
                  Drive Mutol Dhea
                </Text>
              </Group>
              <Grid className="" gutter={0}>
                <Grid.Col span={10} className="my-auto">
                  <Text className="text-primary-text-1">Drive yang isinya mutol-mutol dhea</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Link target="_blank" to={"https://drive.google.com/drive/folders/1BOl5kXjgrL7qWi4mxL5T2xHb1TJ0qBGS?usp=drive_link"} className="">
                    <IconRightArrowNoTail
                      size={44}
                      className="bg-cream hover:bg-opacity-75 duration-100 cursor-pointer rounded-full p-1 mx-auto"
                      color={theme.colors["primary-text-1"][5]}
                    />
                  </Link>
                </Grid.Col>
              </Grid>
            </Stack>
            <div className="w-full h-full absolute -bottom-2 -left-2 bg-cream rounded-[32px] -z-10"></div>
          </div>
        </Grid.Col>

        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa? */}
      </Grid>
    </Stack>
  );
};
export default FDHomeSection3;
