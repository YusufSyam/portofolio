import React from "react";
import HomeJumbotronParallaxSection from "../pages/home/jumbotron/Home-JumbotronParallax.section";
import FooterLayout from "./footer/Footer.layout";

export type TPageName = "Beranda" | "Aktivitas" | "";

export interface IMainLayout {
  children: JSX.Element;
  activePage?: TPageName;
}
const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-dark-grey to-grey via-navy !p-0">
      <HomeJumbotronParallaxSection />
      <div className="mb-10">{children}</div>
      <FooterLayout />
    </div>
  );
};
export default MainLayout;
