import { Group, Text } from "@mantine/core";
import React from "react";

export interface IButton1 {
  icon?: string | JSX.Element;
  label: string;
  onClick?: () => void;
}

const Button1: React.FC<IButton1> = ({
  label,
  icon = "",
  onClick = () => {},
}) => {
  return (
    <Group
      onClick={onClick}
      className="cursor-pointer duration-200 ease-in-out transition-all px-6 py-2 rounded-full border-2 border-white/[0.5] hover:translate-x-[2px] hover:translate-y-[-2px] gap-2"
    >
      {icon}
      <Text className="text-white font-quicksand text-xl tracking-4">
        {label}
      </Text>
    </Group>
  );
};
export default Button1;
