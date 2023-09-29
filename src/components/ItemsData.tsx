import BRZ from "../../public/Suburu_BRZ.webp";
import GTO from "../../public/Mitsubishi_GTO.webp";
import lambo from "../../public/lambo.webp";
import enzo from "../../public/enzo.webp";
import gtr from "../../public/gtr.webp";
import gt3rs from "../../public/gt3rs.webp";
import rx7 from "../../public/rx7.webp";
import jesko from "../../public/Ko_jesko.webp";
import m3 from "../../public/m3_gts.webp";
import mustang from "../../public/mustang_gt.webp";

import { StaticImageData } from "next/image";

interface item {
  title: string;
  cost: number;
  img_path: StaticImageData;
}
export type itemsType = item[];

export const items: itemsType = [
  {
    title: "2013 Subaru BRZ",
    cost: 65,
    img_path: BRZ,
  },
  {
    title: "1997 Mitsubishi GTO",
    cost: 50,
    img_path: GTO,
  },
  {
    title: "Lamborgini Centenario",
    cost: 4900,
    img_path: lambo,
  },
  {
    title: "Ferrari Enzo",
    cost: 7000,
    img_path: enzo,
  },
  {
    title: "Nissan GTR R35",
    cost: 250,
    img_path: gtr,
  },
  {
    title: "Mazda RX7",
    cost: 85,
    img_path: rx7,
  },
  {
    title: "Porsche GT3RS",
    cost: 490,
    img_path: gt3rs,
  },
  {
    title: "FORD MUSTANG GT",
    cost: 490,
    img_path: mustang,
  },
  {
    title: "Koenigsegg Jesko",
    cost: 6800,
    img_path: jesko,
  },
  {
    title: "BMW M3 GTS",
    cost: 170,
    img_path: m3,
  },
];
