import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return <input className="hover:bg-cyan-900 bg-[transparent] font-bigblueterm text-cyan-100 border-2 border-cyan-500 text-lg w-fit h-fit p-2" {...props} />;
}

