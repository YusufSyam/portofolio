import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PortoProvider } from "./context/PortoContext.context";
import FDHomePage from "./pages/home/jumbotron/fd/pages/home/FDHome.page";
import FDMutolPage from "./pages/home/jumbotron/fd/pages/mutol/FDMutol.page";
import FDTimelinePage from "./pages/home/jumbotron/fd/pages/timeline/FDTimeline.page";
import { FDROUTES } from "./pages/home/jumbotron/fd/utils/const";
import { MAINROUTES } from "./utils/const/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          "primary-text-1": [
            "#212A31",
            "#212A31",
            "#212A31",
            "#212A31",
            "#212A31",
            "#212A31",
            "#212A31",
            "#212A31",
            "#212A31",
            "#212A31"
          ],
          "primary-text-2": [
            "#657387",
            "#5b697d",
            "#515f73",
            "#475569",
            "#3d4b5f",
            "#334155",
            "#29374b",
            "#1f2d41",
            "#152337",
            "#0b192d"
          ],
          "secondary-text": [
            "#c6d5ea",
            "#bccbe0",
            "#b2c1d6",
            "#a8b7cc",
            "#9eadc2",
            "#94a3b8",
            "#8a99ae",
            "#808fa4",
            "#76859a",
            "#6c7b90"
          ],
          secondary: [
            "#ffffff",
            "#ffffff",
            "#fcfbff",
            "#f2f1ff",
            "#e8e7fb",
            "#deddf1",
            "#d4d3e7",
            "#cac9dd",
            "#c0bfd3",
            "#b6b5c9"
          ],
          error: [
            "#ff5e88",
            "#ff547e",
            "#ff4a74",
            "#ff406a",
            "#ff3660",
            "#ff2c56",
            "#f5224c",
            "#eb1842",
            "#e10e38",
            "#d7042e"
          ],
          divider: [
            "#e7f4ff",
            "#ddeaf9",
            "#d3e0ef",
            "#c9d6e5",
            "#bfccdb",
            "#b5c2d1",
            "#abb8c7",
            "#a1aebd",
            "#97a4b3",
            "#8d9aa9"
          ],
          white: [
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF",
            "#FFFFFF"
          ],
          navy: [
            "#124E66",
            "#124E66",
            "#124E66",
            "#124E66",
            "#124E66",
            "#124E66",
            "#124E66",
            "#124E66",
            "#124E66",
            "#124E66"
          ],
          "dark-grey": [
            "#2E3944",
            "#2E3944",
            "#2E3944",
            "#2E3944",
            "#2E3944",
            "#2E3944",
            "#2E3944",
            "#2E3944",
            "#2E3944",
            "#2E3944"
          ],
          "light-grey": [
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4",
            "#D3D9D4"
          ],
          grey: [
            "#748D92",
            "#748D92",
            "#748D92",
            "#748D92",
            "#748D92",
            "#748D92",
            "#748D92",
            "#748D92",
            "#748D92",
            "#748D92"
          ],
          black: [
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000"
          ],
          cream: [
            "#F7E987",
            "#F7E987",
            "#F7E987",
            "#F7E987",
            "#F7E987",
            "#F7E987",
            "#F7E987",
            "#F7E987",
            "#F7E987",
            "#F7E987"
          ],
          "fd-cream": [
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7",
            "#FFF3C7"
          ],
          "fd-light-pink": [
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4",
            "#FEC7B4"
          ],
          "fd-pink": [
            "#FC819E",
            "#FC819E",
            "#FC819E",
            "#FC819E",
            "#FC819E",
            "#FC819E",
            "#FC819E",
            "#FC819E",
            "#FC819E",
            "#FC819E"
          ],
          "fd-blue": [
            "#96ccdc",
            "#96ccdc",
            "#96ccdc",
            "#96ccdc",
            "#96ccdc",
            "#96ccdc",
            "#96ccdc",
            "#96ccdc",
            "#96ccdc",
            "#96ccdc"
          ],
          "fd-dark-pink": [
            "#F7418F",
            "#F7418F",
            "#F7418F",
            "#F7418F",
            "#F7418F",
            "#F7418F",
            "#F7418F",
            "#F7418F",
            "#F7418F",
            "#F7418F"
          ]
        }
      }}
    >
      <QueryClientProvider client={queryClient}>
        <PortoProvider>
          <HashRouter>
            <Routes>
              <Route path={MAINROUTES.home} element={<FDHomePage />} />
              <Route path={FDROUTES.fd} element={<FDHomePage />} />
              <Route path={FDROUTES.fdTimeline} element={<FDTimelinePage />} />
              <Route path={FDROUTES.fdGalleryOne} element={<FDMutolPage />} />
            </Routes>
          </HashRouter>
        </PortoProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
