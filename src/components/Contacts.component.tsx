import { Group, Text } from "@mantine/core";
import React from "react";
import {
  IconGmailFilled,
  IconLinkedinFilled,
  IconInstagramFilled,
} from "../assets/icons/Fluent";
import { CLinks } from "../utils/const/links";

export interface IContacts {}

const Contacts: React.FC<IContacts> = ({}) => {
  return (
    <Group>
      <Text className="font-quicksand-semibold text-xl text-white self-end">
        contacts :
      </Text>
      <Group className="bg-white/[0.1] rounded-full px-6 py-2 gap-6">
        <IconGmailFilled
          onClick={() => {
            window.open(CLinks.gmail, "_blank");
          }}
          color="white"
          size={24}
          className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
        />
        <IconLinkedinFilled
          onClick={() => {
            window.open(CLinks.linkedin, "_blank", "noopener,noreferrer");
          }}
          color="white"
          size={26}
          className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
        />
        <IconInstagramFilled
          onClick={() => {
            window.open(CLinks.ig, "_blank", "noopener,noreferrer");
          }}
          color="white"
          size={28}
          className="cursor-pointer duration-200 ease-in-out transition-all hover:translate-x-[2px] hover:translate-y-[-2px] "
        />
      </Group>
    </Group>
  );
};
export default Contacts;
