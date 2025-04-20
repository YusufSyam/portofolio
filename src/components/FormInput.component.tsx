import {
  TextInput as MantineTextInput,
  NumberInputStylesNames,
  SelectStylesNames,
  Styles,
  TextInputProps,
  TextInputStylesNames,
  useMantineTheme,
} from "@mantine/core";

import { IconSearchFilledRounded } from "../assets/icons/Fluent";

export const getDefaultStyleSearch = ():
  | Styles<TextInputStylesNames | NumberInputStylesNames | SelectStylesNames>
  | undefined => {
  const theme = useMantineTheme();
  const color = theme.colors["white"][5];
  return {
    input: {
      borderWidth: "0px",
      borderRadius: "9999px",
      padding: "22px",
      color,
      // fontWeight: 400,
      fontFamily: "quicksand-semibold",
      letterSpacing: "0.01em",
      backgroundColor: "#FFFFFF1F",
      fontSize: "16px",
    },
    label: {
      fontWeight: 800,
      color,
    },
    icon: {
      paddingLeft: "6px",
    },
  };
};

export const MySearchInput = ({
  onFocus,
  onBlur,
  ...props
}: TextInputProps) => {
  return (
    <>
      <MantineTextInput
        styles={{ ...getDefaultStyleSearch() }}
        icon={
          <IconSearchFilledRounded size={20} color={"white"} className="" />
        }
        {...props}
      />
    </>
  );
};
