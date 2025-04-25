import {
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React from "react";
import { IconHeartFilled } from "../../../../../../assets/icons/Fluent";
import FDModal from "../../../../../../components/FDModal.component";
import jumbotron from "../../assets/images/jumbotron.jpg";
import fullMail from "../../assets/images/mail.png";
import FDChat from "./FDChat.component";

export interface IFDHomeSection1 {
  isMailClicked: boolean;
  setIsMailClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FDHomeSection1: React.FC<IFDHomeSection1> = ({
  isMailClicked,
  setIsMailClicked
}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="p-4 gap-8 mb-10">
      <FDModal
        opened={isMailClicked}
        setOpened={setIsMailClicked}
        title={"Untuk Nessa"}
        yesButtonLabel="Tutup"
        minWidth={400}
        children={
          <Stack className=" gap-2">
            <Text className="text-primary-text-2 font-semibold tracking-5 text-lg mx-6">
              selamat ulang tahun annisa anderila alwadina andalangkuuu
            </Text>

            <div className="mt-6 mb-6 mx-6">
              <Divider className="" />
            </div>
            <Stack className="gap-4">
              <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                bemanaaa rasanya jadii dewasaa? enak tidakkk? jiakhh 23 mii toaa mkoo dek . yaa semogaa diumur yang 23 ini nesaa panjang umur sehat selalu murah rezeki dilancarkan urusanyaa dan berbakti kepada orang tua semoga punya tanah 1000 hektar kandang walet emas 14 kg mobil kicil yang listrik wara pink satu mall tsm satuu tambak ikan juga. intinya wish u all the best 
              </Text>
              <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                thank uu for all, arigatou gozaimasuu, syukron, kamsamidaaah sudah terimaa reski anugra yang pakbal ini terima kasih sudah sabar sama kiki yang perhatianya kek cctv 24 jam, dan selaluu bikin senang reski anugra sekalii lagii happy birthday sayanggg. 
              </Text>
              <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                Sayangku ke kitaaa  lebih dari yang bisa dijelaskan kata-kata,This is the only thing I can do for you right now
                 ❤️
              </Text>
              <Text className="font-semibold text-primary-text-2 mx-6 mt-4 text-end">
                kiki
              </Text>
            </Stack>
          </Stack>
        }
        onClose={() => {}}
        onSubmit={() => {
          setIsMailClicked(false);
        }}
      />
      <Stack className="rounded-3xl px-4 pt-6 pb-14 sm:pb-8 relative ">
        <div className="absolute w-full h-full bg-fd-dark-pink/70 left-0 top-0 rounded-3xl"></div>
        <Grid gutter={"xl"} columns={24}>
          <Grid.Col span={24} md={9} className="z-50">
            <Stack className="w-full gap-0">
              <div className="w-full sm:w-[95%] self-end rounded-full overflow-hidden">
                <img
                  src={jumbotron}
                  alt="Gambar Item"
                  className="w-full h-full object-cover"
                />
              </div>
              <Stack className="self-center gap-1">
                <Text className="text-center font-dancing-script-bold text-white text-[34px] sm:text-[44px]">
                  happy 23rd birthday
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={24} md={13} className="z-10">
            <Stack className="gap-12 mx-1 mt-4 md:mt-0">
              <Stack className="gap-0  w-full">
                <Text className="text-white font-semibold text-md ml-4 md:block hidden">
                  A website made for my favourite person,
                </Text>
                <Group className="-mt-4 gap-2 md:self-start self-center">
                  <Text className="text-white font-roboto text-[56px] sm:text-[64px] md:text-[72px] tracking-5 ">
                    Annisa
                  </Text>
                  <IconHeartFilled
                    size={72}
                    color={theme.colors["fd-cream"][5]}
                    className="hidden sm:block"
                  />
                  <IconHeartFilled
                    size={54}
                    color={theme.colors["fd-cream"][5]}
                    className="block sm:hidden"
                  />
                </Group>
                <Text className="text-white font-roboto text-[24px] sm:text-[36px] md:self-start self-end sm:mr-0 mr-8 sm:self-center sm:ml-4 md:ml-56 -mt-4 sm:-mt-6 tracking-5">
                  Anderila Alwadina
                </Text>
              </Stack>
              <Stack>
                <FDChat caption="Welcome! This site was created by Kiki, just for Nessa" />
                <FDChat
                  cardColor="fd-cream"
                  caption="Hope you enjoy and appreciate my work"
                />
                <FDChat cardColor="fd-blue" caption="2 weeks of work >...<" />
                <FDChat
                  cardColor="fd-light-pink"
                  caption="Langkah Pertama: Klik ikon surat di bawah 👇🏻"
                />
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
        <div
          onClick={() => {
            setIsMailClicked(true);
          }}
          className="w-24 sm:w-32 cursor-pointer z-10 bg-white p-1 rounded-xl absolute right-10 sm:right-20 -bottom-8 sm:-bottom-12"
        >
          <img
            src={fullMail}
            alt="Gambar Item"
            className="w-full h-full object-cover bg-cream"
          />
        </div>
      </Stack>
      
    </Stack>
  );
};
export default FDHomeSection1;

// {!isMailClicked && (
//   <>
//     <div className="w-full h-full absolute bg-fd-cream cursor-pointer z-10">
//       <img
//         src={mail}
//         alt="Gambar Item"
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <Stack className="absolute z-20 gap-0 bottom-2 left-0 right-0">
//       <Text className="font-poppins text-fd-dark-pink text-xl text-center">
//         Dari Ucup
//       </Text>
//       <Text className="text-secondary-text-500 text-md tracking-5 text-center -mt-2">
//         (Klik untuk membuka)
//       </Text>
//     </Stack>
//   </>
// )}
