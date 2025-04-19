import {
    TextInput as MantineTextInput,
    NumberInputStylesNames,
    SelectStylesNames,
    Styles,
    TextInputProps,
    TextInputStylesNames,
    useMantineTheme
} from "@mantine/core";
  
    
  import { useState } from "react";
import { IconSearchFilledRounded } from "../assets/icons/Fluent";
  

export const getDefaultStyleSearch = (
    isFocus: boolean,
    isError: boolean
  ):
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
        color
      },
      icon:{
        paddingLeft: "6px",
        
      },
      
    };
  };
  

export const MySearchInput = ({
    onFocus,
    onBlur,
    ...props
  }: TextInputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const theme = useMantineTheme();
  
    return (
      <>
        <MantineTextInput
          styles={{ ...getDefaultStyleSearch(isFocus, !!props.error) }}
          icon={
            <IconSearchFilledRounded size={20} color={"white"} className="" />
          }
          onFocus={(e) => {
            setIsFocus(true);
            if (!!onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocus(false);
            if (!!onBlur) onBlur(e);
          }}
          {...props}
        />
      </>
    );
  };