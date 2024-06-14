import { ReactNode } from "react";
import Main from "../components/Main";

export type MainMenuProps = {
  children?: ReactNode;
};

export default function MainMenu({ children }: MainMenuProps) {
  return <Main>
    <div className="w-fit h-fit p-2 flex justify-center items-center" >ERROR</div>
    <div className="w-fit h-fit p-2 flex justify-center items-center" >SUCCESS</div>
    <div className="w-fit h-fit p-2 flex justify-center items-center" >WARNING</div>
    <div className="w-fit h-fit p-2 flex justify-center items-center" >INVALID</div>
    <div className="w-fit h-fit p-2 flex justify-center items-center" >SUSPECT</div>
    {children}
  </Main>;
}

