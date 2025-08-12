import { Container, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import layer1 from "../../../assets/images/parallax/layer0.png";
import layer2 from "../../../assets/images/parallax/layer1.png";
import layer3 from "../../../assets/images/parallax/layer2.png";
import layer4 from "../../../assets/images/parallax/layer3.png";
import bglayer from "../../../assets/images/parallax/bglayer.png";
import HeaderLayout from "../../../layout/header/Header.layout";
import HomeJumbotronSection from "./Home-Jumbotron.section";

export interface IHomeJumbotronParallaxSection {}

const HomeJumbotronParallaxSection: React.FC<
  IHomeJumbotronParallaxSection
> = ({}) => {
  const [offsetY, setOffsetY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Aktifkan animasi setelah render pertama
    setTimeout(() => setLoaded(true), 50);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <HeaderLayout />
      <img
        src={bglayer}
        alt="Background"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.1}px)`,
        }}
      />

      {/* Layer 1 */}
      <img
        src={layer1}
        alt="Layer 1"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out delay-200 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      />

      {/* Layer 2 */}
      <img
        src={layer2}
        alt="Layer 2"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out delay-400 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.25}px)`,
        }}
      />

      {/* Layer 3 */}
      <img
        src={layer3}
        alt="Layer 3"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out delay-600 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      />

      {/* Layer 4 */}
      <img
        src={layer4}
        alt="Layer 4"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out delay-800 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transform: `translateY(${offsetY * 0.05}px)`,
        }}
      />

      <Container className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Stack className="gap-0 -mt-52">
          <Text className="font-quicksand-semibold text-3xl md:text-6xl text-white tracking-5 text-center">
            HELLO THERE! I'M <span className="text-cream">YUSUF SYAM</span>
            {/* hello there, i'm <span className="text-cream">yusuf syam</span> */}
          </Text>
          <Text className="font-quicksand-semibold text-2xl md:text-4xl text-white tracking-5 text-center">
            Welcome to my <span className="text-white">website ;)</span>
          </Text>
        </Stack>
      </Container>
    </section>
  );
};
export default HomeJumbotronParallaxSection;
