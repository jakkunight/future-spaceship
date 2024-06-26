import { ReactNode, HTMLAttributes } from "react";

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: ReactNode
};

export default function Title({ children, ...props }: TitleProps) {
  return <h1 className="text-sky-500 neon-text-sky-500 font-bigblueterm text-3xl font-extrabold" {...props} >
    {children}
  </h1>;
}
