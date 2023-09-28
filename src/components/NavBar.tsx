"use client";

import { store } from "../../store";
import useStore from "./useStore";

export default function NavBar() {
  const budget = useStore(store, (state) => state.budget);
  return (
    <div className=" w-full h-[10vh] flex items-center justify-end">
      <p className="mr-[5%] text-white font-bold">BUDGET: {budget}</p>
    </div>
  );
}
