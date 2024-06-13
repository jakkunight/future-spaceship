import { ReactNode, HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function Header({ children, ...props }: HeaderProps) {
  return <footer
    className="flex justify-start p-4 items-center w-screen h-full gap-4"
    {...props} >
    {children}
  </footer>;
}

