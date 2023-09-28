"use client";

import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { store } from "../../store";

export default function ToDO() {
  const [inpt, setInpt] = useState<string>("");
  const { incrementBudget } = store();

  const itemsFromLocalStorage = JSON.parse(
    localStorage.getItem("items") || "[]"
  );
  const [arr, setArr] = useState<{ id: string; title: string }[]>(
    itemsFromLocalStorage
  );

  if (typeof window !== "undefined") {
    useEffect(() => {
      localStorage.setItem("items", JSON.stringify(arr));
    }, [arr]);
  }

  return (
    <div className="h-fit min-h-[20%] w-2/3  relative">
      <div className="w-full flex justify-center border border-purple-400 rounded-md bg-purple-400 p-4 text-white font-bold">
        TO DO
      </div>
      <div
        className={`w-full flex flex-col items-center mt-4 bg-[#252728] pt-2 ${
          arr.length > 0
            ? "border border-[#252728] rounded-tl-md rounded-tr-md"
            : ""
        }`}
      >
        {arr.map((a) => {
          return (
            <div
              className="w-[70%] bg-[#333536] border border-[#333536] rounded-md mb-1 p-2  flex"
              key={a.id}
            >
              <input
                type="checkbox"
                name="yo"
                id="yo"
                className="peer mr-2"
                onChange={(e) => {
                  if (e.target.checked) {
                    incrementBudget(5);
                  } else {
                    incrementBudget(-5);
                  }
                }}
              />
              <label
                htmlFor="yo"
                className="cursor-pointer text-white peer-checked:line-through peer-checked:text-slate-500"
              >
                {a.title}
              </label>
              <button
                className="mr-0 ml-auto text-red-500 hover:font-bold"
                onClick={() => {
                  console.log(arr);
                  setArr(
                    arr.filter((e) => {
                      return e.id != a.id;
                    })
                  );
                  console.log(arr);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className=" bg-[#252728] p-3 flex justify-center mt-1 border border-[#252728] rounded-bl-md rounded-br-md focus:outline-none">
        <input
          type="text"
          className="border-2 border-[#414344] rounded-lg w-[60%] mr-2 p-1 bg-transparent text-white"
          value={inpt}
          onChange={(e) => {
            setInpt(e.target.value);
          }}
        />
        <button
          className="border border-[#414344] rounded-lg font-semibold text-white p-1 hover:text-green-600 hover:border-green-400"
          onClick={() => {
            setArr((prevArr) => [
              ...prevArr,
              {
                id: v4(),
                title: inpt,
              },
            ]);
            setInpt(" ");
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
