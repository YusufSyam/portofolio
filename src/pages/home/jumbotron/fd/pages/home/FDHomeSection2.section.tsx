import { Grid, Stack, Text } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import ourGalleryImage from "../../../../../../assets/images/bg3.png";
import storyOfUsImage from "../../assets/images/storyOfUs.jpg";
import ucupMessageImage from "../../assets/images/ucupMessage.jpg";
import { FDROUTES } from "../../utils/const";
import countdownImage from "../timeline/timeline-images/i6.jpg";
import FDHomeCountdownComp from "./FDHomeCountdown.component";
import FDNavigateCardComp from "./FDNavigateCard.component";

export interface IFDHomeSection2 {
  isMailClicked: boolean;
  setIsMailClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FDHomeSection2: React.FC<IFDHomeSection2> = ({
  setIsMailClicked
}) => {
  const navigate = useNavigate();

  function onClickMutolDhea() {
    navigate(FDROUTES.fdGalleryOne);
  }

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({});
  return (
    <Stack className="gap-10">
      <Text className="text-fd-dark-pink text-[48px] text-center font-poppins-semibold tracking-5">
        explore
      </Text>
      <Grid gutter={48} className="mb-8 mx-10">
        <Grid.Col span={12} sm={6}>
          <FDNavigateCardComp
            cardColor="fd-blue"
            title="Story of Us"
            caption="Timeline hubungan Kiki dan Nessa"
            onClick={() => {
              navigate(FDROUTES.fdTimeline);
            }}
            image={storyOfUsImage}
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6}>
          <FDNavigateCardComp
            cardColor="fd-pink"
            title="Our Gallery"
            onClick={onClickMutolDhea}
            image={ourGalleryImage}
            caption="Halaman yang berisi gambar dan foto yang mengabadikan momen-momen penting Kiki dan Nessa :)"
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6}>
          <FDNavigateCardComp
            cardColor="fd-light-pink"
            title="Pesan dari Kiki"
            caption="Sebuah pesan singkat yang ditulis kiki untuk istri masa depannya"
            onClick={() => {
              setIsMailClicked(true);
            }}
            image={ucupMessageImage}
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6}>
          <FDNavigateCardComp
            cardColor="fd-cream"
            title="Hitung Mundur Ultah Nessa"
            image={countdownImage}
            caption="Countdown ultahhh"
            onClick={() => {
              scrollIntoView({
                alignment: "center"
              });
            }}
          />
        </Grid.Col>
      </Grid>
      <FDHomeCountdownComp targetRef={targetRef} />
    </Stack>
  );
};
export default FDHomeSection2;
