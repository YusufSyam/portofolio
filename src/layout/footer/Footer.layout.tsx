import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import {
  IconGmailFilled,
  IconInstagramFilled,
  IconLibraryBookFilled,
  IconLinkedinFilled,
} from "../../assets/icons/Fluent";
import { CLinks } from "../../utils/const/links";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  const theme= useMantineTheme();
  return (
    <Stack
      id="section-contacts"
      className="bg-dark-grey pt-12 pb-4 px-8 sm:px-16 md:px-24 gap-6"
    >
      <Group className="gap-0 justify-between">
        <Group className="self-start ">
          {/* <WebsiteIcon /> */}
          <Group className="gap-3 flex-nowrap mx-auto sm:mx-0">
            <IconLibraryBookFilled
              size={40}
              color={theme.colors["dark-grey"][5]}
              className="bg-white p-[6px] rounded-full"
            />
            <Stack className="gap-0">
              <Text className="font-quicksand text-white text-md">
                logbook of
              </Text>
              <Text className="font-quicksand-bold text-white text-4xl -mt-4 tracking-5">
                yusuf
              </Text>
            </Stack>
          </Group>
          <div className="w-20 h-[1px] bg-white hidden sm:block"></div>
          <Text className="text-white font-quicksand mx-auto sm:mx-0 -mt-2 sm:mt-0">
            The Portfolio of Yusuf Syam
          </Text>
        </Group>
        <Group className="gap-4 mt-3 sm:mt-6 md:mt-2">
          <Stack className="gap-2 self-start md:flex hidden">
            <Text className="font-quicksand-semibold text-lg text-white self-start">
              contacts :
            </Text>
            <Text className="font-quicksand-semibold text-lg text-white self-start">
              other links :
            </Text>
          </Stack>
          <Stack className="h-full self-start gap-0 sm:gap-2 sm:mt-0 mt-6">
            <Group className=" gap-4 self-start">
              <Text className="font-quicksand-semibold text-lg text-white self-start inline-block md:hidden">
                contacts :
              </Text>
              <IconGmailFilled
                onClick={() => {
                  window.open(CLinks.gmail, "_blank");
                }}
                color="white"
                size={20}
                className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
              />
              <IconLinkedinFilled
                onClick={() => {
                  window.open(CLinks.linkedin, "_blank", "noopener,noreferrer");
                }}
                color="white"
                size={20}
                className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
              />
              <IconInstagramFilled
                onClick={() => {
                  window.open(CLinks.ig, "_blank", "noopener,noreferrer");
                }}
                color="white"
                size={22}
                className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
              />
            </Group>
            <Group className="mt-1 sm:gap-4 gap-2">
              <Text className="font-quicksand-semibold text-lg text-white self-start inline-block md:hidden">
                other links :
              </Text>
              <Text
                onClick={() => {
                  window.open(CLinks.github, "_blank", "noopener,noreferrer");
                }}
                className="font-quicksand-semibold text-lg text-light-grey self-start cursor-pointer hover:text-grey duration-200 ease-linear transition-all"
              >
                Github
              </Text>
              <Text className="font-quicksand-semibold text-lg text-white ">
                .
              </Text>
              <Text
                onClick={() => {
                  window.open(CLinks.sof, "_blank", "noopener,noreferrer");
                }}
                className="font-quicksand-semibold text-lg text-light-grey self-start cursor-pointer hover:text-grey duration-200 ease-linear transition-all"
              >
                Stack Overflow
              </Text>
              <Text className="font-quicksand-semibold text-lg text-white ">
                .
              </Text>
              <Text
                onClick={() => {
                  window.open(CLinks.kaggle, "_blank", "noopener,noreferrer");
                }}
                className="font-quicksand-semibold text-lg text-light-grey self-start cursor-pointer hover:text-grey duration-200 ease-linear transition-all"
              >
                Kaggle
              </Text>
            </Group>
          </Stack>
        </Group>
      </Group>
      <Text className="border-t border-white text-center pt-4 text-white">
        &copy; 2025 Muh Yusuf Syam. All rights reserved
      </Text>
    </Stack>
  );
};
export default FooterLayout;
