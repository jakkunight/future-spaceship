import { ReactNode, HTMLAttributes } from "react";

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode
};

export default function Paragraph({ children, ...props }: ParagraphProps) {
  return <p className="text-cyan-50 text-lg font-vt323" {...props} >
    {children}
  </p>;
}

