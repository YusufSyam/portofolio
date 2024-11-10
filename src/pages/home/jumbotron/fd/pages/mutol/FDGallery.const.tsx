import i1 from "../timeline/timeline-images/18a.jpg"
import i2 from "../timeline/timeline-images/19a.jpg"
import i3 from "../timeline/timeline-images/19b.jpg"
import i4 from "../timeline/timeline-images/20.jpg"

import p2 from "./photos/p1.jpg"
import p2b from "./photos/p1b.jpg"
import p1b from "./photos/p2b.jpg"
import p1 from "./photos/p2.jpg"
import p3 from "./photos/p3.jpg"
import p4 from "./photos/p4.jpg"

import bg2 from "../../../../../../assets/images/bg2.jpg"

import t1 from "../../assets/images/storyOfUs.jpg"

export interface IGalleryImages {
  src: string;
  width: number;
  height: 180;
  caption: string;
}

export const Pictures: IGalleryImages[] = [
  {
    src: p1,
    width: 300,
    height: 180,
    caption: "Photobooth 1"
  },
  {
    src: p1b,
    width: 300,
    height: 180,
    caption: "Photobooth 1"
  },
  {
    src: i1,
    width: 300,
    height: 180,
    caption: "Photobooth 2"
  },
  {
    src: p2,
    width: 300,
    height: 180,
    caption: "Photobooth 3"
  },
  {
    src: p2b,
    width: 300,
    height: 180,
    caption: "Photobooth 1"
  },
  {
    src: i3,
    width: 300,
    height: 180,
    caption: "Goal Cafe"
  },
  {
    src: i2,
    width: 300,
    height: 180,
    caption: "Buryam"
  },
  {
    src: p3,
    width: 300,
    height: 180,
    caption: "Bandara"
  },
  {
    src: p4,
    width: 300,
    height: 180,
    caption: "Jogging"
  },
  {
    src: t1,
    width: 300,
    height: 180,
    caption: "ASdljasdnadsl"
  },
  {
    src: i4,
    width: 300,
    height: 180,
    caption: "iuadasudnai"
  },
  {
    src: bg2,
    width: 300,
    height: 180,
    caption: "askjahnksdj"
  },
];
