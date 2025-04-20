import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import { IconCPPFilled, IconGitFilled, IconJavaFilled, IconJavascriptFilled, IconKerasFilled, IconNextJSFilled, IconPandasOutline, IconPythonFilled, IconPytorchOutline, IconReactOutline, IconRStudioFilled, IconTableauOutline, IconTailwindOutline, IconTensorflowFilled, IconTypescriptFilled, IconWordpressFilled } from "../../../assets/icons/Fluent";

export interface IHomeTechStackSection { }

const HomeTechStackSection: React.FC<IHomeTechStackSection> = ({ }) => {
    return (
        <Stack className="mx-40">
            <Text className="font-quicksand-semibold text-5xl text-white tracking-5 text-center">
                tech stack
            </Text>
            <Text className="text-white text-center text-lgp tracking-4 -mt-4">
                Programming languages, frameworks and tools i used
            </Text>
            <Group className="gap-8 self-center w-fit mt-4">
                <IconPythonFilled size={44} color="white"/>
                <IconTypescriptFilled size={44} color="white"/>
                <IconJavascriptFilled size={44} color="white"/>
                <IconJavaFilled size={44} color="white"/>
                <IconCPPFilled size={44} color="white"/>
                <IconRStudioFilled size={46} color="white"/>
            </Group>
            <Group className="gap-8 self-center w-fit">
                <IconTensorflowFilled size={42} color="white"/>
                <IconKerasFilled size={42} color="white"/>
                <IconPytorchOutline size={44} color="white"/>
                <IconPandasOutline size={44} color="white"/>
                <IconTableauOutline size={44} color="white"/>
                <IconReactOutline size={44} color="white"/>
                <IconNextJSFilled size={42} color="white"/>
                <IconTailwindOutline size={44} color="white"/>
                <IconGitFilled size={44} color="white"/>
                <IconWordpressFilled size={42} color="white"/>
            </Group>
        </Stack>
    );
};
export default HomeTechStackSection;
