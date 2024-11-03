import { Group, Text } from "@mantine/core";
import React from "react";
import HeaderNavigationComp from "./HeaderNavigation.component";
import { MAINROUTES } from "../../../../../../utils/const/routes";
import { FDROUTES } from "../../utils/const";

export interface IFDHeaderLayout {}

const FDHeaderLayout: React.FC<IFDHeaderLayout> = ({}) => {
  return (
    <Group className="justify-between px-4 pt-6">
      {/* <Text className='font-alkatra-semibold text-white text-2xl'>
        Ucup's Portfolio
      </Text> */}
      <Group className="gap-12">
        <HeaderNavigationComp label="Home" href={FDROUTES.fd} />
        <HeaderNavigationComp
          label="Our Timeline"
          href={FDROUTES.fdTimeline}
        />
        <HeaderNavigationComp label="Contact" />
        <HeaderNavigationComp label="About" />
      </Group>
    </Group>
  );
};
export default FDHeaderLayout;
