import { SignProps } from "../types";

export default function Sign({ title }: SignProps) {
  return (
    <div className="bg-coffee-100 flex py-3 md:py-4 px-4 md:px-8 rounded-md justify-center">
      <p className="text-black text-lg md:text-xl font-bold text-center">{title}</p>
    </div>
  );
}
