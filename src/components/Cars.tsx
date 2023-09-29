"use client";

import dynamic from "next/dynamic";
import { items, itemsType } from "./ItemsData";
import { useEffect, useState } from "react";

const Cards = dynamic(() => import("./Cards"), { ssr: false });

export default function Cars() {
  const [reloader, setReloader] = useState<boolean>(true);

  let currentItems: itemsType = [];
  let i = 0;
  const NUMBER_OF_ITEMS = 10;

  while (i < 3) {
    let x = Math.random() * NUMBER_OF_ITEMS;
    x = Math.trunc(x);
    if (!currentItems.includes(items[x])) {
      currentItems.push(items[x]);
      i++;
    }
  }
  i = 0;
  useEffect(() => {
    let x = Math.random() * NUMBER_OF_ITEMS;
    x = Math.trunc(x);
    if (!currentItems.includes(items[x])) {
      currentItems.push(items[x]);
      i++;
    }
    i = 0;
  }, [reloader]);
  return (
    <>
      <div className="h-full grid md:grid-cols-3 ps-8 pe-8 gap-12 sm:grid-cols-1 pt-6">
        <Cards
          title={currentItems[0].title}
          cost={currentItems[0].cost}
          imagePath={currentItems[0].img_path}
        />
        <Cards
          title={currentItems[1].title}
          cost={currentItems[1].cost}
          imagePath={currentItems[1].img_path}
        />
        <Cards
          title={currentItems[2].title}
          cost={currentItems[2].cost}
          imagePath={currentItems[2].img_path}
        />
      </div>
      <button
        className="text-white absolute top-4 left-8 border border-white p-3"
        onClick={() => setReloader(!reloader)}
      >
        Reload Image
      </button>
    </>
  );
}
