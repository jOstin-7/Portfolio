import { useState } from "react";

function useLightMode() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode((prev) => !prev);
    document.documentElement.classList.toggle("light-mode");
    document.documentElement.classList.toggle("sun-set");
    document.documentElement.classList.toggle("moon-rise");
  };

  return { isLightMode, toggleMode };
}

export default useLightMode;