import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "A description",
};

export default async function Home() {
  // const res = await fetch("https://kea-alt-del.dk/t7/api/products");
  // const data = await res.json();
  // const { brandname, gender } = data;

  return (
    <main className="flex justify-center bg-indigo-500 text-white pt-20 pb-20">
      <h1 className="text-8xl">Hej</h1>
    </main>
  );
}
