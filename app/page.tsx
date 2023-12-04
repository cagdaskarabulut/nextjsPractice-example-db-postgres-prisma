import prisma from "@/lib/prisma";

export default async function Home() {
  const entries = await prisma.entry.findMany();
  return (
    <>
      <h1>Liste</h1>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
        </div>
      ))}
    </>
  );
}
