import { ReactNode, HTMLAttributes } from "react";

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode
};

export default function Paragraph({ children, ...props }: ParagraphProps) {
  return <p className="text-cyan-100 text-sm font-mono" {...props} >
    {children}
  </p>;
}

