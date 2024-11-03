import React, { useState } from "react";
import { Stack } from "@mantine/core";
import FDMainLayout from "../../layout/Main.layout";
import FDHomeSection1 from "./FDHomeSection1.section";
import FDHomeSection2 from "./FDHomeSection2.section";
import FDHomeSection3 from "./FDHomeSection3.section";

export interface IFDHomePage {}

const FDHomePage: React.FC<IFDHomePage> = ({}) => {
  const [isMailClicked, setIsMailClicked] = useState(false);
  return (
    <FDMainLayout>
      <Stack className="mt-10">
        <FDHomeSection1 isMailClicked={isMailClicked} setIsMailClicked={setIsMailClicked} />
        <FDHomeSection2 isMailClicked={isMailClicked} setIsMailClicked={setIsMailClicked}  />
        <FDHomeSection3 />
      </Stack>
    </FDMainLayout>
  );
};
export default FDHomePage;
