import "./index.css";
import Display from "./components/Display";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main.tsx";
import Title from "./components/std/Title.tsx";
import Button from "./components/std/Button.tsx";
import Paragraph from "./components/std/Paragraph.tsx";
import Input from "./components/std/Input.tsx";

export default function App() {
  return <div className="w-screen h-screen bg-black">
    <Display>
      <Header>
        <Title>Starship Main Console</Title>
        <Title>User:</Title><Paragraph>@jakkunight</Paragraph>
      </Header>
      <Main>
        <Paragraph>
          Welcome to the starship console! You are on command now!
        </Paragraph>
      </Main>
      <Footer>
        <Paragraph>
          (C) 2024~2034 @jakkunight - All rights reserved.
        </Paragraph>
      </Footer>
    </Display>
  </div>;
}
