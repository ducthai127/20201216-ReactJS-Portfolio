import React, { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id, height, elements = 1) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      try {
        const offsetSetHeight = window.document.getElementById(id).offsetHeight;
        if (window.pageYOffset > offsetSetHeight * elements * height) {
          setAnimation(true);
        }
      } catch (err) {
        setAnimation(false);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id, height, elements]);
}
