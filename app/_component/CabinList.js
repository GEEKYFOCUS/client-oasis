import { unstable_noStore as noStore } from "next/cache";

import CabinCard from "@/app/_component/CabinCard";
import { getCabins } from "@/app/_lib/data-service";

async function CabinList({ filter }) {
  noStore();
  let displayCabin;

  const cabins = await getCabins();

  if (!cabins.length) return null;
  if (filter === "all") displayCabin = cabins;
  if (filter === "small")
    displayCabin = cabins.filter((cabin) => cabin.maxCapacity <= 3);

  if (filter === "medium")
    displayCabin = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayCabin = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabin.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
