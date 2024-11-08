import {
  Group,
  Image,
  Loader,
  Modal,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import {
  BackIconBold,
  DownArrowNoTailOutlineBold,
  ForwardIconBold,
  UpArrowNoTailOutlineBold
} from "../../../../../../assets/icons/Fluent";
import camera from "../../assets/images/dhea-jumbotron.png";
import logoBantaeng from "../../assets/images/mail.png";
import useArray from "../../hooks/useArray";
import FDMainLayout from "../../layout/Main.layout";
import VerticalDivider from "../../../../../../components/VerticalDivider.component";
import { Pictures } from "./FDGallery.const";

export interface IFDMutolPage {}

const FDMutolPage: React.FC<IFDMutolPage> = ({}) => {
  const {
    array: galleryImages,
    set: setGalleryImages,
    clear,
    push
  } = useArray(Pictures);

  const [isGalleryModalOpened, setIsGalleryModalOpened] = useState(false);
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  function onClickGallery(idx: number) {
    setSelectedImageIdx(idx);
    setIsGalleryModalOpened(true);
  }

  const theme = useMantineTheme();

  return (
    <FDMainLayout>
      <Stack>
        {galleryImages.length > 0 ? (
          <Modal
            opened={isGalleryModalOpened}
            onClose={() => {
              setIsGalleryModalOpened(false);
            }}
            title={
              <Group className="gap-2">
                <Text className="font-poppins text-primary-text-500 px-1 py-[1px]">
                  {selectedImageIdx + 1}.
                </Text>
                {galleryImages != null
                  ? galleryImages[selectedImageIdx].caption
                  : "Gallery Foto"}
              </Group>
            }
            centered
            padding={0}
            styles={{
              content: {
                minWidth: `400px`,
                borderRadius: "6px",
                zIndex: 10
              },
              title: {
                // display: "none"
                // margin: "20px"
                fontSize: 14,
                color: "#334155",
                marginTop: "16px",
                marginBottom: "10px",
                marginLeft: "18px",
                fontWeight: 600,
                zIndex: 10,
                fontFamily: "Poppins",
                "@media (min-width: 800px)": {
                  fontSize: 18,
                  marginTop: "18px",
                  marginBottom: "12px",
                  marginLeft: "20px"
                }
              },
              close: {
                // display: "none"
                marginTop: "6px",
                marginRight: "20px",
                zIndex: 20
              },
              header: {
                marginBottom: "6px",
                zIndex: 10,
                backgroundColor: "white",
                width: "100%"
                // backgroundColor: "white"
              }
            }}
          >
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-fd-light-pink -z-10 hidden md:block"></div>
              <img
                src={
                  galleryImages[selectedImageIdx].src != null
                    ? galleryImages[selectedImageIdx].src
                    : logoBantaeng
                }
                // alt={
                //   galleryImages[selectedImageIdx].caption != null
                //     ? galleryImages[selectedImageIdx].caption
                //     : "Galeri Foto"
                // }
                // withPlaceholder
                // placeholder={
                //   <Text align="center" className="block bg-white py-4 w-full">
                //     Gambar Tidak Ditemukan
                //   </Text>
                // }
                onClick={() => {
                  if (selectedImageIdx + 1 >= galleryImages.length) {
                    setSelectedImageIdx(0);
                  } else {
                    setSelectedImageIdx(selectedImageIdx + 1);
                  }
                }}
                className="h-[500px] w-full object-cover bg-cover"
                // className={`${
                //   galleryImages[selectedImageIdx].src == null
                //     ? "h-48 bg-error-50"
                //     : ""
                // }`}
              />
              <Group className="absolute -bottom-7 left-6 mr-20 gap-8">
                <div
                  className={`flex flex-col justify-center cursor-pointer w-[56px] h-[56px] bg-white rounded-full p-3 shadow-[0_0_7px_2px_rgba(139,139,139,0.9)]`}
                  onClick={() => {
                    if (selectedImageIdx - 1 < 0) {
                      setSelectedImageIdx(galleryImages.length - 1);
                    } else {
                      setSelectedImageIdx(selectedImageIdx - 1);
                    }
                  }}
                >
                  <BackIconBold
                    size={36}
                    color={theme.colors["fd-blue"][5]}
                    className="self-center"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center cursor-pointer w-[56px] h-[56px] bg-white rounded-full p-3 shadow-[0_0_7px_2px_rgba(139,139,139,0.9)]`}
                  onClick={() => {
                    if (selectedImageIdx + 1 >= galleryImages.length) {
                      setSelectedImageIdx(0);
                    } else {
                      setSelectedImageIdx(selectedImageIdx + 1);
                    }
                  }}
                >
                  <ForwardIconBold
                    size={36}
                    color={theme.colors["fd-blue"][5]}
                    className="self-center"
                  />
                </div>
              </Group>
            </div>
          </Modal>
        ) : null}
        <div className="mt-10 mb-4 mx-8 md:mx-24 bg-background bg-cover h-[400px] flex flex-col justify-center relative rounded-3xl border-4 border-fd-pink">
          <Stack className="gap-0 border-2 md:border-[4px] w-[95%] md:w-[50%] border-fd-pink ml-2 md:ml-6 p-4 bg-fd-pink/[0.8] rounded-3xl z-10">
            <Group className="gap-2">
              <Text className="self-end font-poppins-semibold text-[48px] text-white">
                Galeri
              </Text>
            </Group>
            <Text className="text-lg text-white text-justify mt-4 font-semibold">
              Pada halaman ini terdapat foto dan gambar yang sebagian
              besar di-ss sendiri oleh Ucup, itu dikarenakan Dhea sangat pelit
              memberikan selfie dan pap
            </Text>
          </Stack>
          {/* <div className="absolute -bottom-6 -right-6 h-full w-full bg-gradient-to-r from-fd-dark-pink to-fd-blue"></div> */}
        </div>
        <VerticalDivider />
        <Stack className="mx-12 mt-10 gap-0">
          {/* <Text className="font-poppins-semibold text-[48px] text-primaryBlue px-3 text-center">
            Galeri
          </Text> */}
          {/* <Group className="justify-center w-full md:w-[60%] self-center gap-12 mb-20">
            <Stack>
              <div className="border-[16px] border-fd-bg-fd-dark-pink border-r-white border-b-white rounded-full">
                <img src={camera} className="w-48 rounded-full" />
              </div>
            </Stack>
            <Stack className="relative">
              <Stack className="gap-0">
                <Text className="font-poppins-bold text-[22px] text-primary-text-500">
                  Disclaimer
                </Text>
              </Stack>
              <VerticalDivider h="sm" />
              <Text className="w-full md:w-[400px] text-primary-text-500 tracking-1 text-justify">
                <Text className="inline-block font-poppins-semibold">
                  Tidak ada hak cipta.
                </Text>{" "}
                Foto-foto berikut diabadikan dan dimiliki oleh mahasiswa KKN.
                Anda dapat menyalin, memodifikasi, mendistribusikan, dan
                menampilkan karya tersebut, bahkan untuk tujuan komersial,
                semuanya tanpa meminta izin.
              </Text>
            </Stack>
          </Group> */}
          <div className="p-3">
            {galleryImages.length <= 0 ? (
              <Loader
                size="xl"
                variant="dots"
                color={"#00337C"}
                className="mx-auto my-8 "
              />
            ) : (
              <Gallery
                images={galleryImages}
                margin={8}
                onClick={onClickGallery}
                maxRows={isGalleryExpanded ? 999 : 3}
              />
            )}
            {/* <div className="absolute w-full h-20 flex justify-center bottom-5">
              <div className="bg-gradient-to-b from-transparent to-black w-[94%] px h-20"></div>
            </div> */}
            <div
              className="bg-fd-pink w-full h-5 mt-1 rounded-b-full flex justify-center cursor-pointer"
              onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
            >
              {isGalleryExpanded ? (
                <UpArrowNoTailOutlineBold
                  size={24}
                  color={"#FFFFFF"}
                  className="-mt-[1px]"
                />
              ) : (
                <DownArrowNoTailOutlineBold
                  size={24}
                  color={"#FFFFFF"}
                  className="-mt-[1px]"
                />
              )}
            </div>
          </div>
        </Stack>
        {/* <img src="https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd" alt="gambar" /> */}
      </Stack>
    </FDMainLayout>
  );
};
export default FDMutolPage;
