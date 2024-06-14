import { HTMLAttributes, ReactNode } from "react";

export type DisplayParams = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function Display({ children, ...props }: DisplayParams) {
  return <div
    //className="w-full min-h-screen h-full text-white text-4xl font-bigblueterm shadow-[inset_0px_0px_2rem] shadow-cyan-500 bg-[100% 80%] bg-repeat-y bg-gradient-to-b from-transparent via-cyan-900/50 via-50% animate-oldcrt "
    className="w-full min-h-screen h-full text-white text-4xl font-bigblueterm shadow-[inset_0px_0px_2rem] shadow-cyan-500"
    {...props} >
    <div
      className="scanlines-cyan-500 w-full min-h-screen h-full flex flex-col items-center justify-center" {...props}>
      {children}
    </div>
  </div>;
}
