import { Group, Stack, Stepper, Text } from "@mantine/core";
import React, { useState } from "react";
import { IconSearchFilledRounded } from "../../../assets/icons/Fluent";
import InfoWithNumber from "../../../components/InfoWithNumber.component";
import InfoModal from "../../../components/InfoModal.component";
import { CLinks } from "../../../utils/const/links";

export interface IHomeAboutMeSection {}

const HomeAboutMeSection: React.FC<IHomeAboutMeSection> = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Stack id="section-aboutMe" className="mx-40">
      <InfoModal
        opened={openModal}
        setOpened={setOpenModal}
        title={"about me"}
        onClose={() => {}}
        onSubmit={() => {
          setOpenModal(false);
        }}
        minWidth={1000}
      >
        <Stack className="gap-8">
          <Stack className="gap-4">
            <Text className="text-dark-grey text-justify tracking-4">
              I graduated from Hasanuddin University with a Bachelor's degree in
              Computer Science and a GPA of 3.63. During my undergraduate years,
              I actively contributed as a teaching assistant, gaining valuable
              experience in both academic teaching and team collaboration. I
              also had the opportunity to work as a frontend engineer, where I
              developed user-friendly interfaces and sharpened my skills in
              translating complex ideas into intuitive digital experiences.
              Outside of academics, I have cultivated strong English
              communication skills, reflected in my IELTS score of 7.
            </Text>
            <Text className="text-dark-grey text-justify tracking-4">
              Although most of my professional experience is in frontend
              development, my academic interests are deeply rooted in artificial
              intelligence, especially computer vision. I am passionate about
              exploring how machines interpret visual data and how that can be
              applied to solve real-world problems. I consider myself a lifelong
              learner, always looking for opportunities to grow, collaborate,
              and push beyond my comfort zone to gain new perspectives and
              skills
            </Text>
          </Stack>
          <Stack className="gap-0">
            <Text className="text-dark-grey text-justify tracking-4 font-bold">
              Work Experience
            </Text>
            <Text className="text-dark-grey text-justify tracking-4">
              I have 2 years of professional experience, including
              <span className="font-semibold">
                {" "}
                1.5 years as a Frontend Developer
              </span>
              {" and "}
              <span className="font-semibold">
                6 months as a Data Scientist.
              </span>
            </Text>
            <Stack className="mt-4">
              <Stepper active={-1} orientation="vertical" size="md">
                <Stepper.Step
                  label="Frontend Engineer at NPE Digital"
                  description="Nov 22- Feb 24 (1 year, 3 months)"
                />
                <Stepper.Step
                  label="Frontend Engineer (Freelance)"
                  description="May 24 - Jun 24 (2 months)"
                />
                <Stepper.Step
                  label="Data Scientist at Kartjis.id - Latest"
                  description="Aug 24 - Feb 25 (6 months)"
                />
              </Stepper>
            </Stack>
            <Text className="text-dark-grey text-justify tracking-4">
              For more details you can refer to my{" "}
              <a href={CLinks.cv} target="_blank">
                CV
              </a>
            </Text>
          </Stack>
        </Stack>
      </InfoModal>
      <Text className="font-quicksand-semibold text-5xl text-white tracking-5 text-center">
        about me
      </Text>
      <Text className="text-white text-center text-lgp tracking-4">
        I graduated from Hasanuddin University with a Bachelor's degree in
        Computer Science and a GPA of 3.63. During my undergraduate years, I
        actively contributed as a teaching assistant, gaining valuable
        experience in both academic teaching and team collaboration..{" "}
        <span
          onClick={() => {
            setOpenModal(true);
          }}
          className="text-cream relative cursor-pointer"
        >
          more{" "}
          <IconSearchFilledRounded
            size={14}
            color="#F7E987"
            className="inline absolute top-1 -right-4"
          />
        </span>
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
