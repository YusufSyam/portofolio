import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import jumbotron from "../../assets/images/jumbotron.jpg";

export interface IFDTimelineStepComp {
  title?: string;
  firstCaption?: string;
  secondCaption?: string;
  dateNumber?: string;
  dateMonth?: string;
  imageList?: string[];
  stepType?: "start" | "mid" | "end";
}

const FDTimelineStepComp: React.FC<IFDTimelineStepComp> = ({
  dateNumber = "2",
  dateMonth = "Juni, 2024",
  firstCaption = "",
  secondCaption = "",
  imageList = [jumbotron],
  title = "First Encounter",
  stepType = "mid"
}) => {
  return (
    <Grid gutter={32} gutterSm={64}>
      <Grid.Col span={3} sm={2}>
        <Stack
          style={{
            borderTopLeftRadius: stepType == "start" ? "9999px" : "0px",
            borderTopRightRadius: stepType == "start" ? "9999px" : "0px",
            borderBottomLeftRadius: stepType == "end" ? "9999px" : "0px",
            borderBottomRightRadius: stepType == "end" ? "9999px" : "0px"
          }}
          className="h-full bg-fd-blue/40"
        >
          <div
            className={`self-center w-[2px] h-32 ${
              stepType == "start" ? "bg-transparent" : "bg-white"
            }`}
          ></div>
          <Stack className="gap-0 sm:gap-2">
            {/* <Stack className="mt-12 gap-2"> */}
            <Text className="text-center py-2 px-4  rounded-full text-2xl font-poppins text-white bg-fd-pink w-fit self-center">
              {dateNumber}
            </Text>
            <Text className="text-center text-fd-dark-pink font-semibold tracking-5 sm:text-lg text-md">
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
      <Grid.Col span={9} sm={10}>
        <Grid columns={5} gutter={0} gutterSm={16}>
          <Grid.Col span={5} sm={2} className="p-0">
            <Group className="mb-1 sm:mb-10 md:mb-14 w-full rounded-3xl overflow-x-scroll overflow-y-hidden flex-nowrap">
              <Stack className="w-[353px] shrink-0 h-[220px] relative rounded-3xl p-1">
                <div className="w-full rounded-3xl border border-fd-blue  overflow-hidden z-20">
                  <img
                    src={imageList?.[0]}
                    alt="Gambar Item"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Stack className="bg-fd-blue absolute w-full h-full -left-2 -bottom-2 rounded-3xl -z-10"></Stack>
              </Stack>
              {imageList?.length >= 2 && (
                <Stack className="w-[353px] shrink-0 h-[220px] relative rounded-3xl p-1">
                  <div className="w-full rounded-3xl border border-fd-blue  overflow-hidden z-20">
                    <img
                      src={imageList?.[1]}
                      alt="Gambar Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Stack className="bg-fd-blue absolute w-full h-full -left-2 -bottom-2 rounded-3xl -z-10"></Stack>
                </Stack>
              )}
              {imageList?.length >= 3 && (
                <Stack className="w-[353px] shrink-0 h-[220px] relative rounded-3xl p-1">
                  <div className="w-full rounded-3xl border border-fd-blue  overflow-hidden z-20">
                    <img
                      src={imageList?.[2]}
                      alt="Gambar Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Stack className="bg-fd-blue absolute w-full h-full -left-2 -bottom-2 rounded-3xl -z-10"></Stack>
                </Stack>
              )}
              {imageList?.length >= 4 && (
                <Stack className="w-[353px] shrink-0 h-[220px] relative rounded-3xl p-1">
                  <div className="w-full rounded-3xl border border-fd-blue  overflow-hidden z-20">
                    <img
                      src={imageList?.[3]}
                      alt="Gambar Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Stack className="bg-fd-blue absolute w-full h-full -left-2 -bottom-2 rounded-3xl -z-10"></Stack>
                </Stack>
              )}
              {imageList?.length >= 5 && (
                <Stack className="w-[353px] shrink-0 h-[220px] relative rounded-3xl p-1">
                  <div className="w-full rounded-3xl border border-fd-blue  overflow-hidden z-20">
                    <img
                      src={imageList?.[4]}
                      alt="Gambar Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Stack className="bg-fd-blue absolute w-full h-full -left-2 -bottom-2 rounded-3xl -z-10"></Stack>
                </Stack>
              )}
              {imageList?.length >= 6 && (
                <Stack className="w-[353px] shrink-0 h-[220px] relative rounded-3xl p-1">
                  <div className="w-full rounded-3xl border border-fd-blue  overflow-hidden z-20">
                    <img
                      src={imageList?.[5]}
                      alt="Gambar Item"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Stack className="bg-fd-blue absolute w-full h-full -left-2 -bottom-2 rounded-3xl -z-10"></Stack>
                </Stack>
              )}
            </Group>
          </Grid.Col>
          <Grid.Col span={5} sm={3}>
            <Stack className="mt-0 sm:mt-2 gap-1 sm:gap-2 md:mb-0 mb-14 ml-1 sm:ml-0">
              <Text className="text-fd-dark-pink text-[26px] sm:text-[32px] font-roboto mb-0 sm:mb-2 ">
                {title}
              </Text>
              {
                firstCaption &&
              <Text className="text-primary-text-1 text-justify text-md ml-[2px] sm:ml-0">
                {firstCaption}
              </Text>
              }
              {secondCaption && (
                <Text className="text-primary-text-1 text-justify text-md ml-[2px] sm:ml-0">
                  {secondCaption}
                </Text>
              )}
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default FDTimelineStepComp;
