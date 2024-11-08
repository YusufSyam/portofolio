import {
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React, { useState } from "react";
import dhea from "../../assets/images/dhea-jumbotron.png";
import jumbotron from "../../assets/images/jumbotron.png";
import mail from "../../assets/images/mail2.png";
import fullMail from "../../assets/images/mail.png";
import FDModal from "../../../../../../components/FDModal.component";
import { IconHeartFilled } from "../../../../../../assets/icons/Fluent";
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
        title={"Untuk Bintangku, Dhea"}
        minWidth={400}
        children={
          <Stack className=" gap-2">
            <Text className="text-primary-text-2 font-semibold tracking-5 text-lg mx-6">
              Selamat ulang tahun yang ke-23 Dhea sayang. Di hari spesial ini,
              Ucup ingin mengingatkan betapa berharganya dirimu bagiku.
            </Text>

            <div className="mt-6 mb-6 mx-6">
              <Divider className="" />
            </div>
            <Stack className="gap-4">
              <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                Maaf yaa, hanya ini yang bisa Ucup lakukan untuk merayakan ulang
                tahunmu dari jauh :"). Maaf juga ya kalau selama ini Ucup
                menjengkelkan dan banyak kekurangannya
              </Text>
              <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                Terima kasih sudah mengisi hidupku dengan senyum, tawa, dan
                cinta yang tak ternilai. Semoga setiap langkahmu di tahun ini
                dipenuhi kebahagiaan dan kesuksesan yang kamu impikan.
              </Text>
              <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                Ucup mencintaimu lebih dari yang bisa dijelaskan kata-kata, dan
                Ucup berjanji akan selalu ada di sampingmu, hari ini dan
                selamanya ❤️
              </Text>
              <Text className="font-semibold text-primary-text-2 mx-6 mt-4 text-end">
                Ucup, 03 November 2024
              </Text>
            </Stack>
          </Stack>
        }
        onClose={() => {}}
        onSubmit={() => {
          setIsMailClicked(false);
        }}
      />
      <Stack className="bg-background bg-cover rounded-3xl px-4 pt-6 pb-14 sm:pb-8 relative ">
        <div className="absolute w-full h-full bg-fd-dark-pink/70 left-0 top-0 rounded-3xl"></div>
        <Grid gutter={"xl"} columns={24}>
          <Grid.Col span={24} md={11} className="z-50">
            <Stack className="w-full mx-auto gap-0">
              <div className="w-full sm:w-[95%] mx-auto self-center">
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
                    Ardhiyah
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
                  Regita Iriani
                </Text>
              </Stack>
              <Stack>
                <FDChat caption="Selamat datang di website yang dibuat Ucup yang dibuat untuk Dhea tercintaa" />
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
      {/* <Grid gutter={"xl"} className="mx-4 mt-8">
        <Grid.Col span={8}>
          <Stack className="">
            <Text className="font-poppins text-[36px] text-primary-text-1 text-start">
              Untuk Bintangku, <span className="text-fd-dark-pink">Dhea</span>{" "}
              ✨
            </Text>
            <Text className="text-xl text-secondary-text-500 font-poppins">
              Sebuah pesan singkat yang ditulis ucup untuk istri masa depannya.
              Klik Mail-nya untuk membuka pesan {"->"}
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack
            className="overflow-hidden"
            onClick={() => {
              setIsMailClicked(!isMailClicked);
              // setIsMailClicked(true);
            }}
          >
            {!false ? (
              <div className="relative  w-full">
                <div className="w-full cursor-pointer z-10">
                  <img
                    src={fullMail}
                    alt="Gambar Item"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Stack className="absolute z-20 gap-0 bottom-6 left-0 right-0">
                  <Text className="font-poppins text-fd-dark-pink text-lg text-center">
                    Dari Ucup
                  </Text>
                  <Text className="text-secondary-text-500 text-md tracking-5 text-center -mt-2">
                    (Klik untuk membuka)
                  </Text>
                </Stack>
              </div>
            ) : (
              // <div className="mx-auto p-2 rounded-[30px] bg-fd-dark-pink w-fit"></div>
              <Stack className="bg-secondary/40 rounded-3xl gap-2 border-fd-dark-pink border-2">
                <Text className="text-primary-text-2 font-semibold tracking-5 text-lg mx-6 mt-6">
                  Selamat ulang tahun yang ke-23 Dhea sayang. Di hari spesial
                  ini, Ucup ingin mengingatkan betapa berharganya dirimu bagiku.
                </Text>

                <div className="mt-6 mb-6 mx-6">
                  <Divider className="" />
                </div>
                <Stack className="gap-2">
                  <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                    Maaf yaa, hanya ini yang bisa Ucup lakukan untuk merayakan
                    ulang tahunmu dari jauh :"). Maaf juga ya kalau selama ini
                    Ucup menjengkelkan dan banyak kekurangannya
                  </Text>
                  <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                    Terima kasih sudah mengisi hidupku dengan senyum, tawa, dan
                    cinta yang tak ternilai. Semoga setiap langkahmu di tahun
                    ini dipenuhi kebahagiaan dan kesuksesan yang kamu impikan.
                  </Text>
                  <Text className="text-primary-text-2 tracking-5 text-lg mx-6">
                    Ucup mencintaimu lebih dari yang bisa dijelaskan kata-kata,
                    dan Ucup berjanji akan selalu ada di sampingmu, hari ini dan
                    selamanya ❤️
                  </Text>
                  <Text className="font-semibold text-primary-text-2 mx-6 mt-4 mb-6 text-end">
                    Ucup, 03 November 2024
                  </Text>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Grid.Col>
      </Grid> */}
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
