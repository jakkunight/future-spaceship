import { HTMLAttributes, ReactNode } from "react";

export type DisplayParams = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function Display({ children, ...props }: DisplayParams) {
  return <div
    className="text-cyan-100 text-4xl font-[vt323] shadow-[inset_0px_0px_2rem] shadow-cyan-500 bg-[100% 80%] bg-repeat-y bg-gradient-to-b from-transparent via-cyan-900/50 via-50% animate-oldcrt w-screen h-screen"
    //className="text-cyan-100 text-4xl shadow-[inset_0px_0px_2rem] shadow-cyan-500 bg-[100% 80%] w-screen h-screen"
    {...props} >
    <div
      className="scanlines-cyan-500 w-screen h-screen flex justify-center items-center flex-col" {...props}>
      {children}
    </div>
  </div>;
}
