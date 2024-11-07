import i1 from "../mutol/photos/1.jpg"
import i2 from "../mutol/photos/2.png"

export interface IGalleryImages {
  src: string;
  width: number;
  height: 180;
  caption: string;
}

export const Pictures: IGalleryImages[] = [
  {
    src: i1,
    width: 300,
    height: 180,
    caption: "Satu"
  },
  {
    src: i2,
    width: 300,
    height: 180,
    caption: "Dua"
  },
];
