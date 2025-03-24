import NavigationBar from "@/components/general/NavigationBar";
import SearchComp from "@/components/home/SearchComp";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div
        className="flex justify-center items-center h-screen bg-neutral-800"
        style={{
          backgroundImage:
            "url('/lobby-with-large-lobby-with-large-chandelier-plant-center 1.png')",
        }}
      >
        <SearchComp />
      </div>
    </>
  );
}
