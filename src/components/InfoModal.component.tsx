import {
  Group,
  ModalProps,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React from "react";
import {
  IconBackArrowOutlineRounded,
  IconSearchFilledRounded
} from "../assets/icons/Fluent";
import Button2 from "./Button2.component";
import Modal from "./Modal.component";

interface IInfoModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children?: string | JSX.Element;
  onSubmit?: () => void;
  // onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseFunc?: () => void;
  yesButtonLabel?: string;
  minWidth?: number;
  disableNoButton?: boolean;
  subTitle?: string;
  leftTitleIcon?: JSX.Element;
}

const InfoModal = ({
  opened,
  setOpened,
  title,
  children = "Data yang telah dihapus tidak dapat dikembalikan.",
  onSubmit,
  yesButtonLabel = "Close",
  minWidth = 600,
  onCloseFunc = () => {},
  disableNoButton = false,
  subTitle = "",
  leftTitleIcon,
  ...props
}: IInfoModal & ModalProps) => {
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
        <Group className="gap-3 ">
          {leftTitleIcon == null ? (
            <IconSearchFilledRounded
              color={theme.colors["dark-grey"][5]}
              size={32}
              className=""
            />
          ) : (
            <>{leftTitleIcon}</>
          )}
          <Text className="text-3xl text-dark-grey font-quicksand-semibold">
            {title}
          </Text>
        </Group>
      }
    >
      <Stack className="relative ">
        {typeof children === "string" ? (
          <Text className="text-lg text-dark-grey mx-[48px]">{children}</Text>
        ) : (
          <div className="text-lg text-dark-grey mx-[48px]">{children}</div>
        )}
        <Group className="self-end mt-4 gap-6">
          <Button2
            bgColor="dark"
            label={yesButtonLabel}
            icon={<IconBackArrowOutlineRounded size={18} color="white" />}
            onClickFunc={onSubmit}
          ></Button2>
        </Group>
      </Stack>
    </Modal>
  );
};

export default InfoModal;
