import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import {
  IconGmailFilled,
  IconInstagramFilled,
  IconLinkedinFilled,
} from "../../assets/icons/Fluent";
import WebsiteIcon from "../../components/WebsiteIcon.component";
import { CLinks } from "../../utils/const/links";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  return (
    <Stack id="section-contacts" className="bg-dark-grey pt-12 pb-4 px-24 gap-6">
      <Group className="gap-0 justify-between">
        <Group className="self-start ">
          <WebsiteIcon />
          <div className="w-20 h-[1px] bg-white"></div>
          <Text className="text-white font-quicksand">
            The Portfolio of Yusuf Syam
          </Text>
        </Group>
        <Group className="gap-4 mt-2">
          <Stack className="gap-2 self-start">
            <Text className="font-quicksand-semibold text-lg text-white self-start">
              contacts :
            </Text>
            <Text className="font-quicksand-semibold text-lg text-white self-start">
              other links :
            </Text>
          </Stack>
          <Stack className="h-full self-start gap-2">
            <Group className=" gap-4 self-start">
              <IconGmailFilled
                onClick={() => {
                  window.open(
                    CLinks.gmail,
                    "_blank"
                  );
                }}
                color="white"
                size={20}
                className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
              />
              <IconLinkedinFilled
                onClick={() => {
                  window.open(
                    CLinks.linkedin,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                color="white"
                size={20}
                className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
              />
              <IconInstagramFilled
                onClick={() => {
                  window.open(
                    CLinks.ig,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                color="white"
                size={22}
                className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
              />
            </Group>
            <Group className="mt-1">
              <Text
                onClick={() => {
                  window.open(
                    CLinks.github,
                    "_blank",
                    "noopener,noreferrer"
                  );
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
                  window.open(
                    CLinks.sof,
                    "_blank",
                    "noopener,noreferrer"
                  );
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
                  window.open(
                    CLinks.kaggle,
                    "_blank",
                    "noopener,noreferrer"
                  );
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
