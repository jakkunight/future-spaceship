import "./index.css";
import Display from "./components/Display";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/std/Title.tsx";
import Text from "./components/std/Text.tsx";
import Clock from "./components/std/Clock.tsx";

import MainMenu from "./displays/MainMenu.tsx";

export default function App() {
  return <div className="w-full min-h-screen bg-black overflow-clip">
    <Display>
      <Header>
        <img src="/free-scada-logo-dark.svg" alt="Starfleet" width="4%" height="4%" />
        <Clock />
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
