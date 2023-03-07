import React, { useRef, useEffect, RefObject } from "react";

export default function useScroll(
  parentRef: RefObject<HTMLDivElement | null>,
  childRef: RefObject<HTMLDivElement | null>,
  callback?: () => void
) {
  const observer = useRef<IntersectionObserver | null>();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0.5,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        if (callback) callback();
      }
    }, options);

    observer.current.observe(childRef.current!);

    return function () {
      if (observer.current) observer.current.disconnect();
    };
  }, [callback]);
}
