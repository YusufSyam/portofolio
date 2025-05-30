import React from "react";
import FooterLayout from "./footer/Footer.layout";
import HeaderLayout from "./header/Header.layout";

export type TPageName = "Beranda" | "Aktivitas" | "";

export interface IMainLayout {
  children: JSX.Element;
  activePage?: TPageName;
}
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-dark-grey to-grey via-navy !p-0 bg-error">
      <HeaderLayout />
      <div className="px-8 sm:px-10 md:px-12 mt-10 sm:mt-16 md:mt-20 mb-10">{children}</div>
      <FooterLayout />
    </div>
  );
};
export default MainLayout;
