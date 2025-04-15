import React from "react";
import { Group, Stack, Text } from "@mantine/core";
import InfoWithNumber from "../../../components/InfoWithNumber.component";
import MyCircleDividerComp from "../../../components/MyDivider.component copy";
import { IconSearchFilledRounded } from "../../../assets/icons/Fluent";

export interface IHomeAboutMeSection { }

const HomeAboutMeSection: React.FC<IHomeAboutMeSection> = ({ }) => {
    return (
        <Stack className="mx-40">
            <Text className="font-quicksand-semibold text-5xl text-white tracking-5 text-center">
                about me
            </Text>
            <Text className="text-white text-center text-lgp tracking-4">
                I graduated from Hasanuddin University with a Bachelor's degree in Computer Science and a GPA of 3.63. During my undergraduate years, I actively contributed as a teaching assistant, gaining valuable experience in both academic teaching and team collaboration.. {" "}
                <span className="text-cream relative cursor-pointer">more <IconSearchFilledRounded size={14} color="#F7E987" className="inline absolute top-1 -right-4" /></span>
            </Text>
            <Group className="gap-32 self-center w-fit mt-4">
                <InfoWithNumber info="Years of experience" number={2} />
                <InfoWithNumber info="Projects" number={10} />
                <InfoWithNumber info="Certificates" number={6} />
            </Group>
        </Stack>
    );
};
export default HomeAboutMeSection;
