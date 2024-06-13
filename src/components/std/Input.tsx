import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return <input className="bg-zinc-800 text-sky-700 border-2 border-zinc-500 h-fit w-fit p-2" {...props} />;
}

