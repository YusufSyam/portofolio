import { AppShell, Text } from "@mantine/core";
import React from "react";
import HeaderLayout from "./header/Header.layout";

export type TPageName = "Beranda" | "Aktivitas" | "";

export interface IFDMainLayout {
  children: JSX.Element;
  activePage?: TPageName;
}
const FDMainLayout: React.FC<IFDMainLayout> = ({ activePage, children }) => {
  return (
    <AppShell
      header={<HeaderLayout />}
      footer={
        <Text className="justify-between px-8 py-5 bg-white text-primary-text-1 border-t border-fd-dark-pink mt-24 text-center font-quicksand">
          - Promise you wont let go, u know im afraid of goodbyes.
          <span className="text-fd-dark-pink font-quicksand-semibold">{" "}Love you always.</span>
          -
        </Text>
      }
      // navbar={<SideNavbar />}
      // footer={
      //   <Stack className="bg-dark-red w-full py-6 mt-12 border-t-4 border-yellow">
      //     <Text className="text-center text-white">&copy; 2024 Dept. Matematika, Fak. MIPA, Universitas Hasanuddin. All rights reserved.</Text>
      //   </Stack>
      // }
      // padding={"0px"}
      className="bg-white px-12"
      // className="bg-fd-light-pink/25 px-12"
    >
      <div>{children}</div>
    </AppShell>
  );
};
export default FDMainLayout;
