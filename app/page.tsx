import Image from "next/image";

export default function Home() {
  const Nodes = [
    { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
    { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-24 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-6xl font-semibold leading-10 tracking-tight text-black">
            Hashfunktionen
          </h1>
          <p className="max-w-md text-2xl leading-8 text-zinc-600 dark:text-zinc-400">
            GFS - Dominik Schwarz - Informatik
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hash_table_4_1_1_0_0_1_0_LL.svg/1280px-Hash_table_4_1_1_0_0_1_0_LL.svg.png"
            width={600}
            height={400}
            alt="Hash Table Visualisierung"
            className="rounded-lg border-2"
          />    
          </div>
      </main>
    </div>
  );
}
