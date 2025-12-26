import { SignProps } from "../types";

export default function Sign({ title }: SignProps) {
  return (
    <div className="bg-coffee-100 flex py-4 px-8 rounded-md justify-center">
      <p className="text-black text-xl font-bold">{title}</p>
    </div>
  );
}
