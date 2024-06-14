import "./index.css";
import Display from "./components/Display";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/std/Title.tsx";
import Button from "./components/std/Button.tsx";
import Paragraph from "./components/std/Paragraph.tsx";
import Input from "./components/std/Input.tsx";

import MainMenu from "./displays/MainMenu.tsx";

export default function App() {
  return <div className="w-screen h-screen bg-black">
    <Display>
      <Header>
        <Title>The ALI Project</Title>
        <Button>Matrix Calc</Button>
        <Button>Sci Calc</Button>
        <Button>Vector Calc</Button>
      </Header>
      <MainMenu />
      <Footer>
        <Paragraph>
          (C) 2024~2034 @jakkunight - All rights reserved.
        </Paragraph>
        <Paragraph>
          <a href="https://github.com/jakkunight/future-spaceship/" target="_blank">https://github.com/jakkunight/future-spaceship/</a>
        </Paragraph>
      </Footer>
    </Display>
  </div>;
}
