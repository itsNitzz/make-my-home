import { useEffect, useState } from "react";
import Button from "../UI/Button";
import MoonIcon from "../icons/Moon";
import SunIcon from "../icons/Sun";

let initialLoad = true;

export default function Theme() {
  const [theme, setTheme] = useState("light");
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("theme") && initialLoad) {
      initialLoad = false;
      getTheme("dark");
    }
  }, []);

  const onThemeHandler = (mode: string) => {
    setIsSwitching(true);
    setTimeout(() => {
      getTheme(mode);
      setIsSwitching(false);
    }, 100);
  };

  function getTheme(mode: string) {
    if (mode === "dark") {
      sessionStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      sessionStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
      mode = "light";
    }

    setTheme(mode);
  }

  return (
    <>
      {theme === "light" && (
        <Button
          onClick={() => onThemeHandler("dark")}
          styles={
            isSwitching
              ? "transition-tansform -rotate-[60deg] opacity-0 duration-100 ease-linear"
              : ""
          }>
          <MoonIcon />
        </Button>
      )}
      {theme === "dark" && (
        <Button
          onClick={() => onThemeHandler("light")}
          styles={
            isSwitching
              ? "transition-tansform rotate-[60deg] opacity-0 duration-100 ease-linear"
              : ""
          }>
          <SunIcon />
        </Button>
      )}
    </>
  );
}
