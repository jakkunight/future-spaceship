import { ReactNode } from "react";
import Main from "../components/Main";

export type MainMenuProps = {
  children?: ReactNode;
};

export default function MainMenu({ children }: MainMenuProps) {
  return <Main>
    Hello Tauri!
    {children}
  </Main>;
}

