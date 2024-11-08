import React from "react";
import { Stack, Text, useMantineTheme } from "@mantine/core";
import { TFDColor } from "../../utils/const";

export interface IFDChat {
  cardColor?: TFDColor;
  caption?: string;
  dir?: "start" | "end"
}

const FDChat: React.FC<IFDChat> = ({
  cardColor = "fd-blue",
  caption = "Selamat datang di website yang dibuat Ucup",
  dir="start"
}) => {
  const theme = useMantineTheme();
  return (
    <div className={`relative hover:scale-[1.005] ease-linear duration-200 w-fit cursor-context-menu ${dir=="start"}? "self-start" : "self-end" `}>
      <Text
        style={{
          borderColor: theme.colors[cardColor][5]
        }}
        className={`w-fit rounded-3xl bg-white z-10 py-2 px-4 sm:px-6 overflow-hidden sm:text-lg text-md border text-primary-text-1 `}
      >
        {caption}
      </Text>
      <div
        style={{
          backgroundColor: theme.colors[cardColor][5]
        }}
        className="absolute w-full h-full -left-1 -bottom-1 rounded-3xl -z-10"
      ></div>
    </div>
  );
};
export default FDChat;
