import Cards from "@/components/Cards";
import currentItems from "@/components/ItemsData";

export default function Home() {
  return (
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
  );
}
