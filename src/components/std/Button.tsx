import { ReactNode, HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode,
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button className={" hover:text-cyan-500 hover:shadow-cyan-300 hover:shadow-[inset_0px_0px_1rem] flex items-center justify-center text-cyan-100 font-bigblueterm border-2 border-cyan-500 h-fit w-fit text-lg p-2"} {...props}>
    {children}
  </button>;
}

