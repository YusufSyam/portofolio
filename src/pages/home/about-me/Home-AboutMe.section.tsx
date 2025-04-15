import React from "react";
import { Group, Stack, Text } from "@mantine/core";
import InfoWithNumber from "../../../components/InfoWithNumber.component";
import MyCircleDividerComp from "../../../components/MyDivider.component copy";

export interface IHomeAboutMeSection { }

const HomeAboutMeSection: React.FC<IHomeAboutMeSection> = ({ }) => {
    return (
        <Stack className="mx-40">
            <Text className="font-quicksand-semibold text-5xl text-white tracking-5 text-center">
                about me
            </Text>
            <Group className="gap-32 self-center w-fit">
              <InfoWithNumber info="Years of experience" number={2} />
              <InfoWithNumber info="Projects" number={10} />
              <InfoWithNumber info="Certificates" number={6} />
            </Group>
        </Stack>
    );
};
export default HomeAboutMeSection;
