import { AppShell } from "@mantine/core";
import React from "react";
import HeaderLayout from "./header/Header.layout";

export type TPageName = "Beranda" | "Aktivitas" | "";

export interface IMainLayout {
  children: JSX.Element;
  activePage?: TPageName;
}
const MainLayout: React.FC<IMainLayout> = ({children }) => {
  return (
    <AppShell
      header={<HeaderLayout/>}
      // navbar={<SideNavbar />}
      // footer={
      //   <Stack className="bg-dark-red w-full py-6 mt-12 border-t-4 border-yellow">
      //     <Text className="text-center text-white">&copy; 2024 Dept. Matematika, Fak. MIPA, Universitas Hasanuddin. All rights reserved.</Text>
      //   </Stack>
      // }
      // padding={"0px"}
      className="bg-gradient-to-br from-dark-grey/[0.9] via-dark-grey to-navy px-12"
    >
      <div>{children}</div>
    </AppShell>
  );
};
export default MainLayout;
