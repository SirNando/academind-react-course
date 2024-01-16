import { useState } from "react";

export default function Greeting() {
  const [changeText, setChangeText] = useState(false);
  function handleClick() {
    setChangeText((latestState) => !latestState);
  }

  return (
    <div>
      <h2>Hello world!</h2>
      {!changeText && <p>It's good to see you!</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}
