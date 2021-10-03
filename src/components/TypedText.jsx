import {useRef, useEffect} from "react";
import Typed from "typed.js";

export const TypedText = ({content}) => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: content,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [content]);
  return <span ref={el} />;
};
