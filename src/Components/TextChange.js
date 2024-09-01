import { useState, useEffect, useMemo } from "react";

const TextChange = () => {
  const texts = useMemo(() => ["Hi, Welcome","I'm Sreejith K S", "I'm  a Python developer"], []);
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false);
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
      setCurrentText(texts[index].substring(0, endValue));
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;