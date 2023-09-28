"use client";

import { useEffect, useState } from "react";
import { store } from "../../store";

export default function Counter({ cost }: { cost: number }) {
  const [items, setItems] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(cost * items);
  }, [items]);

  const { budget, setBudget } = store();

  return (
    <div className="bg-[#252728] h-fit flex flex-col mt-auto w-full items-center pt-2 pb-2">
      <div className="flex flex-row">
        <button
          className="border border-slate-500 rounded-md text-white font-semibold pt-1 pl-3 pr-3 pb-1 mr-1 hover:bg-red-500"
          onClick={() => {
            if (items - 1 < 0) {
              setItems(0);
            } else {
              setItems((e) => {
                return e - 1;
              });
            }
          }}
        >
          -
        </button>
        <p className="border border-slate-500 pt-1 pl-3 pr-3 pb-1 text-white font-semibold">
          {items}
        </p>
        <button
          className="border border-slate-500 rounded-md font-semibold text-white pt-1 pl-3 pr-3 pb-1 ml-1 hover:bg-red-500"
          onClick={() => {
            setItems((e) => {
              return e + 1;
            });
          }}
        >
          +
        </button>
      </div>
      <div className="flex w-full justify-center items-center mt-2">
        <p className="text-sm mr-4 font-medium text-white">
          Total cost: {total}
        </p>
        <button
          className="text-sm p-1 border border-[#414344] rounded-lg text-white hover:text-green-600 hover:border-green-400"
          onClick={() => {
            if (budget - total >= 0) {
              setBudget(total);
            } else {
              alert("yo u broke boi!");
            }
          }}
        >
          BUY
        </button>
      </div>
    </div>
  );
}
