import { ReactNode, HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode,
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button className={"bg-zinc-800 text-sky-700 border-2 border-zinc-500 h-fit w-fit p-2"} {...props}>
    {children}
  </button>;
}

