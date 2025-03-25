import NavigationBar from "@/components/general/NavigationBar";
import SearchComp from "@/components/home/SearchComp";
import { getListKota } from "@/lib/api";
import { City, CityResponse } from "@/lib/type";

export default async  function Home() {


  
  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-neutral-800"
        style={{
          backgroundImage:
            "url('/lobby-with-large-lobby-with-large-chandelier-plant-center 1.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center lg:w-4/5">

        <div className="text-4xl font-semibold text-center mb-10 text-white">
          Staycation menjadi lebih mudah hanya dengan satu klik dan dapatkan
          banyak promo menarik!
        </div>
        <SearchComp />
        </div>
      </div>
    </>
  );
}
