import { useEffect, useState } from "react";

const Counter = ({ start, end, suffix }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < end) {
            return prevCount + 1;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      }, 10);
    }
    return () => clearInterval(timer);
  }, [count, end]);

  return <>{count}{suffix}</>;
};

export default Counter;
