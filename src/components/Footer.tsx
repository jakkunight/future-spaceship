import { ReactNode, HTMLAttributes } from "react";

export type FooterProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function Footer({ children, ...props }: FooterProps) {
  return <footer
    className="flex justify-start items-end w-screen h-fit gap-x-4"
    {...props} >
    {children}
  </footer>;
}

