export default function Sign({ title }: { title: string }) {
  return (
    <main className="bg-coffee-100 flex py-4 px-8 rounded-md justify-center">
      <h1 className="text-black text-xl">{title}</h1>
    </main>
  );
}
