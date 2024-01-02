/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = () => {
      if (ref.current) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, ref]);

  return ref;
};

export default useOutsideClick;
