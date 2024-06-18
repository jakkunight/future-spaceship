import { HTMLAttributes, ReactNode } from "react";

export type DisplayParams = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  crtEffect?: boolean;
};

export default function Display({ children, crtEffect, ...props }: DisplayParams) {
  return <div
    className={
      `scanlines-cyan-950 border-2 border-cyan-500 flex flex-col items-center justify-center w-full min-h-screen h-full text-white text-4xl font-bigblueterm shadow-[inset_0px_0px_2rem] shadow-cyan-500 ${crtEffect ? "bg-[100% 80%] bg-repeat-y bg-gradient-to-b from-transparent via-cyan-900/50 via-50% animate-oldcrt" : ""}`
    }
    {...props} >
    {children}
  </div>;
}
