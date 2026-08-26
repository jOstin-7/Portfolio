import { useState } from "react";

function useLightMode() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode((prev) => !prev);
    document.documentElement.classList.toggle("light-mode");
  };

  return { isLightMode, toggleMode };
}

export default useLightMode;