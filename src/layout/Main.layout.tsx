import { AppShell } from "@mantine/core";
import React from "react";
import HeaderLayout from "./header/Header.layout";
import FooterLayout from "./footer/Footer.layout";

export type TPageName = "Beranda" | "Aktivitas" | "";

export interface IMainLayout {
  children: JSX.Element;
  activePage?: TPageName;
}
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div
      className="bg-gradient-to-br from-dark-grey to-grey via-navy !p-0 bg-error"
    >
      <HeaderLayout />
      <div className="px-12 mt-20 mb-10">{children}</div>
      <FooterLayout />
    </div>
  );
};
export default MainLayout;
