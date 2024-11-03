import { Grid, Stack, Text } from "@mantine/core";
import React from "react";
import dhea1 from "../../assets/images/dhea1.jpg";
import FDNavigateCardComp from "./FDNavigateCard.component";
import { MAINROUTES } from "../../../../../../utils/const/routes";
import { useNavigate } from "react-router-dom";
import { FDROUTES } from "../../utils/const";

export interface IFDHomeSection2 {
  isMailClicked: boolean;
  setIsMailClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FDHomeSection2: React.FC<IFDHomeSection2> = ({
  isMailClicked,
  setIsMailClicked
}) => {
  const navigate = useNavigate();

  function onClickMutolDhea(){
    navigate(FDROUTES.fdGalleryOne)
  }
  return (
    <Stack>
      <Grid gutter={64}>
        <Grid.Col span={6}>
          <FDNavigateCardComp
            cardColor="fd-dark-pink"
            title="Story of Us"
            caption="Timeline hubungan Dhea dan Ucup. First encounter, menjadi teman VC sleep call, from close friend to lover, until now"
            onClick={() => {
              navigate(FDROUTES.fdTimeline);
            }}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <FDNavigateCardComp cardColor="fd-cream" />
        </Grid.Col>
        <Grid.Col span={6}>
          <FDNavigateCardComp cardColor="fd-light-pink" title="Our Gallery" onClick={onClickMutolDhea} />
        </Grid.Col>
        <Grid.Col span={6}>
          <FDNavigateCardComp
            cardColor="fd-pink"
            title="Pesan dari Ucup"
            caption="Sebuah pesan singkat yang ditulis ucup untuk istri masa depannya"
            onClick={() => {
              setIsMailClicked(true);
            }}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default FDHomeSection2;
