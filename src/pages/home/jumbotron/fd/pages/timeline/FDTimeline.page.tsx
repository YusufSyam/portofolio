import { Grid, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { IconCalendarLtrOutline } from "../../../../../../assets/icons/Fluent";
import FDMainLayout from "../../layout/Main.layout";
import { OUR_TIMELINE } from "./FDTimelineConst.const";
import FDTimelineStepComp, {
  IFDTimelineStepComp
} from "./FDTimelineStep.component";

export interface IFDTimelinePage {}

const FDTimelinePage: React.FC<IFDTimelinePage> = ({}) => {
  const theme = useMantineTheme();
  // const [ourTimeline] = useState<IFDTimelineStepComp[]>(OUR_TIMELINE);
  const ourTimeline = OUR_TIMELINE
  return (
    <FDMainLayout>
      <Stack className="mx-0 sm:mx-6 md:mx-24 gap-10 mt-10">
        <Grid gutter={64} className="">
          <Grid.Col span={2} className="">
            <IconCalendarLtrOutline
              size={96}
              color={theme.colors["fd-dark-pink"][5]}
              className="hidden md:block bg-fd-blue/40 rounded-full mx-auto px-4 py-2"
            />
            <IconCalendarLtrOutline
              size={64}
              color={theme.colors["fd-dark-pink"][5]}
              className="md:hidden block bg-fd-blue/40 rounded-full mx-auto px-4 py-2"
            />
          </Grid.Col>
          <Grid.Col span={10}>
            <Stack className="gap-4 md:gap-0">
              <Text className="font-poppins text-primary-text-1 text-[30px] sm:text-[38px] md:text-[44px]">
                Our Timeline
              </Text>
              <Text className="text-secondary-text-500 -mt-2 ml-1 text-md sm:text-lg">
                Timeline hubungan Dhea dan Ucup. First encounter, menjadi teman
                VC sleep call, from close friend to lover till now.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
        <Stack className="gap-0">
          {ourTimeline?.map((d: IFDTimelineStepComp, idx: number) => {
            return (
              <FDTimelineStepComp
                key={idx}
                {...d}
                stepType={
                  idx === 0
                    ? "start"
                    : idx === ourTimeline?.length - 1
                    ? "end"
                    : "mid"
                }
              />
            );
          })}
          {/* <FDTimelineStepComp stepType="start" />
          <FDTimelineStepComp />
          <FDTimelineStepComp />
          <FDTimelineStepComp />
          <FDTimelineStepComp stepType="end" /> */}
        </Stack>
      </Stack>
    </FDMainLayout>
  );
};
export default FDTimelinePage;
