import Counter from "./Counter";
import Image from "next/image";
import { StaticImageData } from "next/image";
export default function Cards({
  title,
  cost,
  imagePath,
}: {
  title: string;
  cost: number;
  imagePath: StaticImageData;
}) {
  return (
    <div className=" md:h-1/2 flex flex-col items-center md:mt-auto md:mb-auto">
      <div className="h-3/4 w-full flex flex-col items-center pt-2 border-r-4 border-l-4 border-t-4 border-[#252728]">
        <p className="mb-3 text-white font-bold">{title}</p>
        <div className="w-full h-2/3 relative ">
          <Image alt="image" src={imagePath} fill />
        </div>
      </div>
      <Counter cost={cost} />
    </div>
  );
}
