import { ReactNode, HTMLAttributes } from "react";

export type MainProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function Main({ children, ...props }: MainProps) {
  return <main
    className="bg-cyan-950/75 shadow-[inset_0px_0px_1rem] shadow-cyan-500  p-2 text-lg flex flex-col gap-2 w-[98%] h-full flex-1 overflow-scroll border-8 border-double border-cyan-500 m-4"
    {...props} >
    {children}
  </main>;
}

