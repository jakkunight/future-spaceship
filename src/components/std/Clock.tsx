import { useState } from "react";
import Text from "./Text.tsx";
import Label from "./Label.tsx";

const Clock = () => {
  let time = new Date().toLocaleTimeString()

  const [ctime, setTime] = useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleString()
    setTime(time)
  }
  setInterval(UpdateTime);
  return <div className="flex flex-row gap- items-center justify-center">
    <Label htmlFor="stardate" className="text-sky-500 text-lg" >{"Stardate: "}</Label>
    <Text id="stardate" className="text-sky-200 text-sm" >{ctime}</Text>
  </div>;
}

export default Clock;
