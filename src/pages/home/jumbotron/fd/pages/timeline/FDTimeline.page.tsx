import React from "react";
import FDMainLayout from "../../layout/Main.layout";
import { Grid, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import FDTimelineStepComp from "./FDTimelineStep.component";
import { IconCalendarLtrOutline } from "../../../../../../assets/icons/Fluent";

export interface IFDTimelinePage {}

const FDTimelinePage: React.FC<IFDTimelinePage> = ({}) => {
  const theme = useMantineTheme();
  return (
    <FDMainLayout>
      <Stack className="mx-24 gap-10 mt-10">
        <Grid gutter={64} className="">
          <Grid.Col span={2} className="">
            <IconCalendarLtrOutline
              size={96}
              color={theme.colors["fd-dark-pink"][5]}
              className="bg-fd-blue/40 rounded-full mx-auto px-4 py-2"
            />
          </Grid.Col>
          <Grid.Col span={10}>
            <Stack className="gap-0">
              <Text className="font-poppins text-primary-text-1 text-[44px]">
                Our Timeline
              </Text>
              <Text className="text-secondary-text-500 -mt-2 ml-1">
                Timeline hubungan Dhea dan Ucup. First encounter, menjadi teman
                VC sleep call, from close friend to lover, until now
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
        <Stack className="gap-0">
          <FDTimelineStepComp stepType="start" />
          <FDTimelineStepComp />
          <FDTimelineStepComp />
          <FDTimelineStepComp />
          <FDTimelineStepComp />
          <FDTimelineStepComp stepType="end" />
        </Stack>
      </Stack>
    </FDMainLayout>
  );
};
export default FDTimelinePage;
