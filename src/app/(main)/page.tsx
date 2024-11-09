import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <Image src={"/Cityscapes-Town.png"} width={400} height={400} alt="" />
      <div>
        <h1 className="text-xl font-semibold">Drizzle Designer</h1>
        <p className="text-sm text-gray-400">Select or Create a New Table</p>
      </div>
    </div>
  );
}
