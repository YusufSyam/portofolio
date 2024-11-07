import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IconExplosion } from "../../../../../../assets/icons/Fluent";

export interface IFDHomeCountdownComp {
  targetRef: React.MutableRefObject<any>;
}

const TARGET_DATE = new Date("2025-06-06T00:00:00");

const FDHomeCountdownComp: React.FC<IFDHomeCountdownComp> = ({ targetRef }) => {
  // State untuk menyimpan waktu yang tersisa
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  // Fungsi untuk menghitung selisih waktu
  function calculateTimeLeft() {
    const difference = TARGET_DATE.getTime() - new Date().getTime();
    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
    return timeLeft;
  }

  // Gunakan useEffect untuk memperbarui waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Membersihkan timer ketika komponen di-unmount
  }, []);

  const theme = useMantineTheme();

  return (
    // <div style={{ textAlign: 'center' }}>
    //   <h2>Countdown to Our Next Meeting</h2>
    //   <div style={{ fontSize: '1.5em' }}>
    //     {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    //   </div>
    // </div>
    <Stack className="mt-10 mb-4 border-y border-fd-pink py-10 bg-fd-light-pink/25">
      <Stack className="gap-0">
        <Text
          className="text-primary-text-1 text-3xl font-poppins text-center"
          ref={targetRef}
        >
          Time left until we meet:
        </Text>
        <Text className="text-secondary-text-500 text-center -mt-1 text-md font-semibold"> 6 Juni 2025 </Text>
      </Stack>
      <Stack className="gap-4  mx-auto self-center w-fit relative ">
        <Stack className="gap-0 self-center z-10">
          <Text className="bg-fd-pink text-white font-poppins-semibold text-[48px] p-6 rounded-full">
            {timeLeft.days}
          </Text>
          <Text className="text-fd-dark-pink font-roboto text-3xl text-center">
            Days
          </Text>
        </Stack>
        <Group className="self-center gap-10 bg-secondary/50 rounded-full py-2 px-8">
          <Group className="gap-1">
            <Text className="bg-fd-pink font-roboto text-2xl py-1 px-2 rounded-sm text-white">
              {timeLeft.hours}
            </Text>
            <Text className="text-fd-pink font-semibold">hours</Text>
          </Group>
          <div className="w-1 h-1 bg-secondary-text-500"></div>
          <Group className="gap-1">
            <Text className="bg-fd-blue font-roboto text-2xl py-1 px-2 rounded-sm text-white">
              {timeLeft.minutes}
            </Text>
            <Text className="text-fd-blue font-semibold">minutes</Text>
          </Group>
          <div className="w-1 h-1 bg-secondary-text-500"></div>
          <Group className="gap-1">
            <Text className="bg-fd-cream font-roboto text-2xl py-1 px-2 rounded-sm text-secondary-text-500">
              {timeLeft.seconds}
            </Text>
            <Text className="text-secondary-text-500 font-semibold">
              seconds
            </Text>
          </Group>
        </Group>

        <IconExplosion
          size={84}
          color={theme.colors["fd-blue"][5]}
          className="-rotate-12 opacity-60 absolute top-4 left-16"
        />
        <IconExplosion
          size={72}
          color={theme.colors["fd-light-pink"][5]}
          className="-rotate-6 opacity-60 absolute -left-2 top-6"
        />
        <IconExplosion
          size={58}
          color={theme.colors["fd-cream"][5]}
          className=" absolute -left-[72px] top-9"
        />
        <IconExplosion
          size={58}
          color={theme.colors["fd-blue"][5]}
          className="opacity-60 absolute -right-[72px] top-9"
        />
        <IconExplosion
          size={72}
          color={theme.colors["fd-light-pink"][5]}
          className="rotate-6 opacity-60 absolute  -right-2 top-6"
        />
        <IconExplosion
          size={84}
          color={theme.colors["fd-cream"][5]}
          className="rotate-12 absolute right-16 top-4"
        />
      </Stack>
    </Stack>
  );
};
export default FDHomeCountdownComp;
