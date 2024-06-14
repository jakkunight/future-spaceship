import { ReactNode, HTMLAttributes } from "react";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode
};

export default function Text({ children, ...props }: TextProps) {
  return <p className="text-white text-lg font-bigblueterm" {...props} >
    {children}
  </p>;
}

