import {
  Group,
  ModalProps,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React from "react";
import { IconHeartFilled } from "../assets/icons/Fluent";
import { SmallButton } from "./MyButton";
import Modal from "./MyModal.component";

interface IFDModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: string | JSX.Element;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseFunc?: () => void;
  noButtonLabel?: string;
  yesButtonLabel?: string;
  minWidth?: number;
  disableNoButton?: boolean;
  disableYesButton?: boolean;
  subTitle?: string;
  leftTitleIcon?: JSX.Element;
}

const FDModal = ({
  opened,
  setOpened,
  title,
  children = "Data yang telah dihapus tidak dapat dikembalikan.",
  onSubmit,
  noButtonLabel = "Batal",
  yesButtonLabel = "Iya",
  minWidth = 600,
  onCloseFunc = () => {},
  disableNoButton = false,
  disableYesButton = false,
  subTitle = "",
  leftTitleIcon,
  ...props
}: IFDModal & ModalProps) => {
  const theme = useMantineTheme();

  return (
    <Modal
      {...props}
      opened={opened}
      setOpened={setOpened}
      onCloseFunc={onCloseFunc}
      minWidth={minWidth}
      subTitle={subTitle}
      title={
        <Group className="gap-3">
          {leftTitleIcon == null ? (
            <IconHeartFilled
              color={theme.colors["fd-dark-pink"][5]}
              size={32}
              className=""
            />
          ) : (
            <>{leftTitleIcon}</>
          )}
          <Text className="sm:text-[24px] text-xl text-primary-text-500 font-poppins-semibold">
            {title}
          </Text>
        </Group>
      }
    >
      <Stack className="relative ">
        {typeof children === "string" ? (
          <Text className="text-lg text-secondary-text-500 ml-[48px]">
            {children}
          </Text>
        ) : (
          <>{children}</>
        )}
        <Group className="self-end mt-4 gap-6">
          <SmallButton
            className="!bg-fd-dark-pink !rounded-md !border-transparent !text-white !hover:bg-fd-dark-pink"
            // disabled={value == null}
            disabled={disableYesButton}
            onClick={onSubmit}
          >
            {yesButtonLabel}
          </SmallButton>
        </Group>
      </Stack>
    </Modal>
  );
};

export default FDModal;
