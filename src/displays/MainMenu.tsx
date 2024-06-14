import { ReactNode } from "react";
import Main from "../components/Main";

export type MainMenuProps = {
  children?: ReactNode;
};

export default function MainMenu({ children }: MainMenuProps) {
  return <Main>
    <div className="animate-flashalert text-red-500 w-fit h-fit p-2 flex justify-center items-center" >ERROR</div>
    <div className="animate-flashalert text-green-500 w-fit h-fit p-2 flex justify-center items-center" >SUCCESS</div>
    <div className="animate-flashalert text-yellow-500 w-fit h-fit p-2 flex justify-center items-center" >WARNING</div>
    <div className="animate-flashalert text-fuchsia-500 w-fit h-fit p-2 flex justify-center items-center" >INVALID</div>
    <div className="animate-flashalert text-amber-500 w-fit h-fit p-2 flex justify-center items-center" >SUSPECT</div>
    {children}
  </Main>;
}

