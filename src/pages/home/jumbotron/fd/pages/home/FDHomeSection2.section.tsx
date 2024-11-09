import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import dhea1 from "../../assets/images/dhea1.jpg";
import FDNavigateCardComp from "./FDNavigateCard.component";
import { MAINROUTES } from "../../../../../../utils/const/routes";
import { useNavigate } from "react-router-dom";
import { FDROUTES } from "../../utils/const";
import { useScrollIntoView } from "@mantine/hooks";
import FDHomeCountdownComp from "./FDHomeCountdown.component";
import storyOfUsImage from "../../assets/images/storyOfUs.jpg"
import countdownImage from "../timeline/timeline-images/20.jpg"
import ourGalleryImage from "../../../../../../assets/images/bg.jpg"
import ucupMessageImage from "../../assets/images/ucupMessage.jpg"

export interface IFDHomeSection2 {
  isMailClicked: boolean;
  setIsMailClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FDHomeSection2: React.FC<IFDHomeSection2> = ({
  isMailClicked,
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
            caption="Timeline hubungan Dhea dan Ucup. First encounter, menjadi teman VC sleep call, from close friend to lover, until now"
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
            caption="Halaman yang berisi gambar dan foto yang mengabadikan momen-momen penting Ucup dan Dhea :)"
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6}>
          <FDNavigateCardComp
            cardColor="fd-light-pink"
            title="Pesan dari Ucup"
            caption="Sebuah pesan singkat yang ditulis ucup untuk istri masa depannya"
            onClick={() => {
              setIsMailClicked(true);
            }}
            image={ucupMessageImage}
          />
        </Grid.Col>
        <Grid.Col span={12} sm={6}>
          <FDNavigateCardComp
            cardColor="fd-cream"
            title="Our meeting 'countdown'"
            image={countdownImage}
            caption="Countdown atau hitungan mundur 6 Juni 2025 AKA 'pertemuan pelepas rindu' di mana Dhea (mungkin?) pulang ke Makassar dan akhirnya bisa memecah celengan rindu anjirr"
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
