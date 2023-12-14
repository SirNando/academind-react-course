import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onExpire }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onExpire, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onExpire, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
