// hooks/useAnimatedNumber.js
import { useEffect, useRef, useState } from "react";

export default function useAnimatedNumber(target, duration = 1000) {
  const [display, setDisplay] = useState(target);
  const animationRef = useRef(null);

  useEffect(() => {
    const steps = 30;
    const stepTime = duration / steps;
    const stepAmount = (target - display) / steps;
    let current = display;
    let count = 0;

    clearInterval(animationRef.current);
    animationRef.current = setInterval(() => {
      current += stepAmount;
      count++;
      setDisplay(Math.round(current));
      if (count >= steps) {
        clearInterval(animationRef.current);
        setDisplay(target);
      }
    }, stepTime);

    return () => clearInterval(animationRef.current);
  }, [target, duration]);

  return display;
}
