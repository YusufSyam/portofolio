import { Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { TFDColor } from "../../utils/const";

export interface IFDNavigateCardComp {
  cardColor: TFDColor;
  title?: string;
  caption?: string;
  image?: string;
  onClick?: () => void;
}

const FDNavigateCardComp: React.FC<IFDNavigateCardComp> = ({
  cardColor,
  title = "Kenangan",
  caption = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur tenetur autem temporibus at inventore. Mollitia!",
  image = "",
  onClick = () => {}
}) => {
  const theme = useMantineTheme();
  return (
    <Stack
      className="relative cursor-pointer hover:scale-[1.01] ease-linear duration-200"
      onClick={onClick}
    >
      <Stack
        style={{
          borderColor: theme.colors[cardColor][5]
        }}
        className="bg-white z-10 w-full rounded-3xl overflow-hidden p-2 border gap-2"
      >
        <div className="w-full z-10 rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="Gambar Item"
            className="w-full h-[240px] object-cover"
          />
        </div>
        <Stack className="gap-2 mb-2 mx-1">
          <Text className="text-center text-primary-text-1 font-poppins-semibold">
            {title}
          </Text>
          <Text className="text-secondary-text-500 text-md text-justify">
            {caption}
          </Text>
        </Stack>
      </Stack>
      <Stack
        style={{
          backgroundColor: theme.colors[cardColor][5]
        }}
        className="absolute w-full h-full -left-4 -bottom-4 rounded-3xl"
      ></Stack>
    </Stack>
  );
};
export default FDNavigateCardComp;
