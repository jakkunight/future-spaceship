import { ReactNode, HTMLAttributes } from "react";

export type LabelProps = HTMLAttributes<HTMLLabelElement> & {
  children?: ReactNode;
  htmlFor?: string;
};

const Label = ({ children, htmlFor, ...props }: LabelProps) => {
  return <label
    htmlFor={htmlFor}
    className={`text-lg text-sky-500`}
    {...props}
  >
    {children}
  </label>;
};

export default Label;

