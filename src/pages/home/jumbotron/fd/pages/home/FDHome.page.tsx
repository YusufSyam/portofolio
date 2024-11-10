import React, { useContext, useState } from "react";
import { Stack, TextInput, Text } from "@mantine/core";
import FDMainLayout from "../../layout/Main.layout";
import FDHomeSection1 from "./FDHomeSection1.section";
import FDHomeSection2 from "./FDHomeSection2.section";
import FDHomeSection3 from "./FDHomeSection3.section";
import { PortoContext } from "../../../../../../context/PortoContext.context";
import FDModal from "../../../../../../components/FDModal.component";

export interface IFDHomePage {}

const FDHomePage: React.FC<IFDHomePage> = ({}) => {
  const [isMailClicked, setIsMailClicked] = useState(false);
  const [passwordInput, setPasswordInput] = useState<string>("");

  const fDContext = useContext(PortoContext);
  if (!fDContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { isAnsweredQuestion, setIsAnsweredQuestion } = fDContext;

  return (
    <FDMainLayout>
      <Stack className="mt-0">
        <FDModal
          setOpened={setIsAnsweredQuestion}
          opened={!isAnsweredQuestion}
          title={"Masukkan Password"}
          onClose={() => {}}
          minWidth={400}
          yesButtonLabel="Jawab"
          onSubmit={()=>{
            if(passwordInput=='15'){
              setIsAnsweredQuestion(true)
              console.log('ke sini')
            }

            console.log(passwordInput)
          }}
        >
          <Stack>
            <Text>Password = Tanggal ultahku + tanggal ultah Dhea</Text>
            <TextInput
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
              }}
              defaultValue={""}
            />
          </Stack>
        </FDModal>
        <FDHomeSection1
          isMailClicked={isMailClicked}
          setIsMailClicked={setIsMailClicked}
        />
        <FDHomeSection2
          isMailClicked={isMailClicked}
          setIsMailClicked={setIsMailClicked}
        />
        <FDHomeSection3 />
      </Stack>
    </FDMainLayout>
  );
};
export default FDHomePage;
