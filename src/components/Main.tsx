import { ReactNode, HTMLAttributes } from "react";

export type MainProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export default function Main({ children, ...props }: MainProps) {
  return <footer
    className="p-2 flex w-[96%] max-h-[90%] min-h-[80%] overflow-scroll border-8 border-double border-cyan-900 m-4"
    {...props} >
    {children}
  </footer>;
}

