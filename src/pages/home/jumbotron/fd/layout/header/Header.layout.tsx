import { Group, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import HeaderNavigationComp from "./HeaderNavigation.component";
import { MAINROUTES } from "../../../../../../utils/const/routes";
import { FDROUTES } from "../../utils/const";
import { IconExplosion, IconHeartFilled, IconShareWindowsOutline } from "../../../../../../assets/icons/Fluent";

export interface IFDHeaderLayout {}

const FDHeaderLayout: React.FC<IFDHeaderLayout> = ({}) => {
  const theme= useMantineTheme();
  return (
    <Group className="justify-between px-4 sm:px-8 py-4 sm:py-5 bg-fd-pink mx-8 rounded-full mt-6">
      <Text className='font-alkatra-semibold text-white text-xl sm:text-2xl'>
        Dhea's
      </Text>
      <Group className="gap-4 sm:gap-6 md:gap-12">
        <HeaderNavigationComp label="Home" href={FDROUTES.fd} />
        <HeaderNavigationComp
          label="Our Timeline"
          href={FDROUTES.fdTimeline}
        />
        <HeaderNavigationComp label="Gallery" href={FDROUTES.fdGalleryOne} />
      </Group>
      <Group className="gap-1 md:flex hidden">
        <IconHeartFilled color={theme.colors['fd-cream'][5]} />
        <IconExplosion color="white"  size={30}/>
        <IconHeartFilled color={theme.colors['fd-cream'][5]} />
      </Group>
    </Group>
  );
};
export default FDHeaderLayout;
