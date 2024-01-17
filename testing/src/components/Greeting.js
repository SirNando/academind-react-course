import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changeText, setChangeText] = useState(false);
  function handleClick() {
    setChangeText((latestState) => !latestState);
  }

  return (
    <div>
      <h2>Hello world!</h2>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}
