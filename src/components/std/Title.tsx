import { ReactNode, HTMLAttributes } from "react";

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: ReactNode
};

export default function Title({ children, ...props }: TitleProps) {
  return <h1 className="text-cyan-500 font-vt323 text-2xl font-extrabold" {...props} >
    {children}
  </h1>;
}
