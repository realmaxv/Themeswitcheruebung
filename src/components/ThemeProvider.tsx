import { useState } from "react";
import { themeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("bg-white text-black");
  const [title, setTitle] = useState("light");
  const themeIncrement: React.MouseEventHandler = (e) => {
    e.preventDefault();
    if (count < 3) {
      setCount((old) => old + 1);
    } else {
      setCount(0);
    }

    switch (count) {
      case 0:
        setTitle("light");
        setTheme("bg-stone-50 text-stone-800");
        break;
      case 1:
        setTitle("dark");
        setTheme("bg-stone-800 text-stone-50");
        break;
      case 2:
        setTitle("blue-green");
        setTheme("bg-blue-800 text-lime-500");
        break;
      default:
        break;
    }
  };

  return (
    <themeContext.Provider value={{ theme, themeIncrement, title }}>
      {children}
    </themeContext.Provider>
  );
};
