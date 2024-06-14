import "./index.css";
import Display from "./components/Display";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/std/Title.tsx";
import Button from "./components/std/Button.tsx";
import Text from "./components/std/Text.tsx";
import Input from "./components/std/Input.tsx";

import MainMenu from "./displays/MainMenu.tsx";

export default function App() {
  return <div className="w-full min-h-screen bg-black">
    <Display>
      <Header>
        <Title>The ALI Project</Title>
        <Button>Matrix Calc</Button>
        <Button>Sci Calc</Button>
        <Button>Vector Calc</Button>
      </Header>
      <MainMenu />
      <Footer>
        <Text>
          ̉̉̉̉(C) 2024-2034 @jakkunight - All rights reserved.
        </Text>
        <Text>
          <a href="https://github.com/jakkunight/future-spaceship/" target="_blank">https://github.com/jakkunight/future-spaceship/</a>
        </Text>
      </Footer>
    </Display>
  </div>;
}
