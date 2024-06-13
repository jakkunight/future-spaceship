import { ReactNode, HTMLAttributes } from "react";

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: ReactNode
};

export default function Title({ children, ...props }: TitleProps) {
  return <h1 className="text-cyan-500 font-mono text-xl" {...props} >
    {children}
  </h1>;
}
