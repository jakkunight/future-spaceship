import { ReactNode, HTMLAttributes } from "react";

export type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function Header({ children, ...props }: HeaderProps) {
  return <header
    className="flex justify-start p-4 items-center w-screen h-fit gap-4"
    {...props} >
    {children}
  </header>;
}

