import { useEffect, useState } from "react";
import Button from "../UI/Button";
import MoonIcon from "../icons/Moon";
import SunIcon from "../icons/Sun";

export default function Theme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (sessionStorage.getItem("theme")) {
      getTheme(sessionStorage.getItem("theme") ?? "light");
    }
  }, []);

  const onThemeHandler = (theme: string) => {
    getTheme(theme);
  };

  function getTheme(theme: string) {
    if (theme === "dark") {
      sessionStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      sessionStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
    setTheme(theme);
  }

  return (
    <>
      {theme === "light" && (
        <Button onClick={() => onThemeHandler("dark")}>
          <MoonIcon />
        </Button>
      )}
      {theme === "dark" && (
        <Button onClick={() => onThemeHandler("light")}>
          <SunIcon />
        </Button>
      )}
    </>
  );
}
