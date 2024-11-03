import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import dhea1 from "../../assets/images/dhea1.jpg";

export interface IFDTimelineStepComp {
  title?: string;
  firstCaption?: string;
  secondCaption?: string;
  dateNumber?: string;
  dateMonth?: string;
  image?: string;
  stepType?: "start" | "mid" | "end";
}

const FDTimelineStepComp: React.FC<IFDTimelineStepComp> = ({
  dateNumber = "2",
  dateMonth = "Juni, 2024",
  firstCaption = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid pariatur magni ex quaerat. Pariatur vel provident quaerat vitae",
  secondCaption = "Necessitatibus harum dolore esse quasi architecto similique.   Praesentium sint non cupiditate earum quidem magni perspiciatis doloribus eius voluptas nam, in repellat nulla!",
  image = dhea1,
  title = "First Encounter",
  stepType = "mid"
}) => {
  return (
    <Grid gutter={64}>
      <Grid.Col span={2}>
        <Stack
          style={{
            borderTopLeftRadius: stepType == "start" ? "9999px" : "0px",
            borderTopRightRadius: stepType == "start" ? "9999px" : "0px",
            borderBottomLeftRadius: stepType == "end" ? "9999px" : "0px",
            borderBottomRightRadius: stepType == "end" ? "9999px" : "0px"
          }}
          className="h-full bg-fd-light-pink"
        >
          <div
            className={`self-center w-[2px] h-32 ${
              stepType == "start" ? "bg-transparent" : "bg-white"
            }`}
          ></div>
          <Stack className="gap-2">
            {/* <Stack className="mt-12 gap-2"> */}
            <Text className="text-center py-2 px-4  rounded-full text-2xl font-poppins text-white bg-fd-dark-pink w-fit self-center">
              {dateNumber}
            </Text>
            <Text className="text-center text-fd-dark-pink font-semibold tracking-5">
              {dateMonth}
            </Text>
          </Stack>

          <div
            className={`self-center w-[2px] h-full ${
              stepType == "end" ? "bg-transparent" : "bg-white"
            }`}
          ></div>
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack className="w-full relative mb-14">
          <div className="w-full z-10 rounded-3xl border border-fd-pink  overflow-hidden">
            <img
              src={image}
              alt="Gambar Item"
              className="w-full h-[220px] object-cover"
            />
          </div>
          <Stack className="bg-fd-pink absolute w-full h-full -left-2 -bottom-2 rounded-3xl"></Stack>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack className="mt-2 gap-2 -ml-8">
          <Text className="text-fd-dark-pink text-[32px] font-roboto mb-2">
            {title}
          </Text>
          <Text className="text-primary-text-1 text-justify">
            {firstCaption}
          </Text>
          {secondCaption && (
            <Text className="text-primary-text-1 text-justify">
              {secondCaption}
            </Text>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
export default FDTimelineStepComp;
