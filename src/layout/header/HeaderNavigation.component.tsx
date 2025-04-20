import { Text } from "@mantine/core";
import React from "react";

export interface IHeaderNavigationComp {
  onClick?: () => void;
  label?: string;
}

const HeaderNavigationComp: React.FC<IHeaderNavigationComp> = ({
  onClick = () => {},
  label = "label",
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <Text className="text-white font-quicksand-semibold tracking-5">
        {label}
      </Text>
    </div>
  );
};
export default HeaderNavigationComp;
